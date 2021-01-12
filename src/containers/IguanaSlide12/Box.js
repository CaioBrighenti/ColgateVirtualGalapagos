import React from "react";
import { Text } from "./Text";
import { useDrop } from "react-dnd";
import classes from "./Box.css";
export const Box = ({ text, moveCard }) => {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: "text",
    drop: moveCard,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      className={classes.box}
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}
    >
      {text ? <Text name={text} /> : "Drag here"}
    </div>
  );
};