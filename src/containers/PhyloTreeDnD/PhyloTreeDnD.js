import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

import IguanaDropTarget from "./IguanaDropTarget";
import IguanaDragSource from "./IguanaDragSource";
import PhyloTreeHeader from "../PhyloTreeHeader";
import PhyloTreeDnDButtons from "./PhyloTreeDnDButtons";
import { Box, delay, getBranchNames } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },

  header: {
    fontSize: "1.5rem",
  },
}));

const useTreeDnD = (iguanaNames, iguanaNamesPlacement) => {
  let initialState = {
    undraggedNames: iguanaNames,
    draggedNames: iguanaNamesPlacement.map((box) => new Box(box)),
    correctnessIndicatorVisible: false,
    completedTreeVisible: false,
  };

  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_UNDRAGGED_NAMES": {
        let { droppedName, currentBox } = action;
        let newlyUndragged = state.undraggedNames.filter(
          (name) => droppedName !== name
        );
        // prettier-ignore
        if (currentBox.placedName !== null && currentBox.placedName !== droppedName) {
          newlyUndragged = update(newlyUndragged, {
            $push: [currentBox.placedName],
          });
        }
        return {
          ...state,
          undraggedNames: newlyUndragged,
        };
      }
      case "UPDATE_DRAGGED_NAMES": {
        let { droppedName, currentBox, index } = action;
        let newDraggedNames = state.draggedNames.map((box) => {
          let newBox = new Box(box.validNames);
          newBox.placedName =
            droppedName === box.placedName ? null : box.placedName;
          return newBox;
        });
        newDraggedNames = update(newDraggedNames, {
          [index]: { $set: new Box(currentBox.validNames, droppedName) },
        });
        return {
          ...state,
          draggedNames: newDraggedNames,
        };
      }
      case "SET_UNDRAGGED_NAMES": {
        return {
          ...state,
          undraggedNames: action.names,
        };
      }
      case "SET_DRAGGED_NAMES": {
        return {
          ...state,
          draggedNames: action.names,
        };
      }
      case "SET_TREE_CORRECTNESS_INDICATOR": {
        return {
          ...state,
          correctnessIndicatorVisible: action.value,
        };
      }
      case "SET_COMPLETE_TREE_STATUS": {
        return {
          ...state,
          completedTreeVisible: action.value,
        };
      }
      case "SHOW_COMPLETED_TREE": {
        let newDraggedNames = [];
        if (action.id === "12") {
          const branchNames = getBranchNames(
            state.draggedNames[1].placedName,
            state.draggedNames[2].placedName
          );

          newDraggedNames = [
            new Box(["Green Iguana"], "Green Iguana"),
            new Box(
              ["Marine Iguana", "Land Iguana"],
              branchNames.topRightBranch
            ),
            new Box(
              ["Marine Iguana", "Land Iguana"],
              branchNames.bottomRightBranch
            ),
          ];
        } else {
          newDraggedNames = [
            new Box([""], ""),
            new Box(["Pink Iguana"], "Pink Iguana"),
          ];
        }

        return {
          ...state,
          correctnessIndicatorVisible: false,
          completedTreeVisible: true,
          draggedNames: newDraggedNames,
        };
      }
      default: {
        return state;
      }
    }
  }, initialState);

  return [state, dispatch];
};

const PhyloTreeDnD = ({ content, tabIndex, handleTabChange }) => {
  // prettier-ignore
  const { iguanaNames, iguanaNamesPlacement
  } = content.phyloTreeData;

  const [state, dispatch] = useTreeDnD(iguanaNames, iguanaNamesPlacement);

  // prettier-ignore
  let { draggedNames, undraggedNames, correctnessIndicatorVisible, completedTreeVisible,
  } = state;

  const props = { backgroundUrl: `url('${content.backgroundUrl}')` };
  const classes = useStyles(props);

  const handleDrop = (droppedName, index) => {
    const currentBox = draggedNames[index];
    dispatch({ type: "UPDATE_UNDRAGGED_NAMES", droppedName, currentBox });
    dispatch({ type: "UPDATE_DRAGGED_NAMES", droppedName, index, currentBox });
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: false });
    dispatch({ type: "SET_COMPLETE_TREE_STATUS", value: false });
  };

  const handleCheckTree = () => {
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: true });
  };

  const handleShowTree = async () => {
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: false });
    dispatch({ type: "SET_COMPLETE_TREE_STATUS", value: true });
    await delay(200);
    dispatch({ type: "SET_UNDRAGGED_NAMES", names: [] });
    await delay(200);
    dispatch({ type: "SHOW_COMPLETED_TREE", id: content.id });
  };

  const handleResetTree = async () => {
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: false });
    dispatch({ type: "SET_COMPLETE_TREE_STATUS", value: false });
    await delay(200);
    dispatch({
      type: "SET_DRAGGED_NAMES",
      names: iguanaNamesPlacement.map((box) => new Box(box)),
    });
    await delay(300);
    dispatch({ type: "SET_UNDRAGGED_NAMES", names: iguanaNames });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.root}>
        <PhyloTreeHeader
          tabIndex={tabIndex}
          handleTabChange={handleTabChange}
          header="Create a phylogenetic tree by dragging the cards below to their correct positions"
        >
          <IguanaDragSource
            undraggedNames={undraggedNames}
            completedTreeVisible={completedTreeVisible}
          />
        </PhyloTreeHeader>
        <IguanaDropTarget
          content={content}
          draggedNames={draggedNames}
          correctnessIndicatorVisible={correctnessIndicatorVisible}
          handleDrop={handleDrop}
        />
        <PhyloTreeDnDButtons
          handleCheckTree={handleCheckTree}
          handleResetTree={handleResetTree}
          handleShowTree={handleShowTree}
          completedTreeVisible={completedTreeVisible}
        />
      </div>
    </DndProvider>
  );
};

export default PhyloTreeDnD;
