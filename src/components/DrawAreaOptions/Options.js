import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

import StrokeColorOption from "./StrokeColorOption";
import FontSizeOption from "./FontSizeOption";
import TextAlignOption from "./TextAlignOption";
import StrokeWidthOption from "./StrokeWidthOption";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2, 4, 2),
    position: "absolute",
    zIndex: 100,
    top: 20,
    left: 20,

    width: "280px",
  },
  optionHeader: {
    fontSize: "0.6rem",
    fontWeight: "bold",
  },
}));

const Options = ({ options, handleOptionsChange, type }) => {
  const classes = useStyles();

  const OptionHeader = () => <Typography className={classes.optionHeader} />;

  return (
    <Paper
      className={classes.root}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12}>
          <Typography className={classes.optionHeader}>Stroke Color</Typography>
          <StrokeColorOption
            options={options}
            handleOptionsChange={handleOptionsChange}
          />
        </Grid>
        {type === "textbox" && (
          <>
            <Grid item xs={12}>
              <Typography className={classes.optionHeader}>
                Font Size
              </Typography>
              <FontSizeOption
                options={options}
                handleOptionsChange={handleOptionsChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.optionHeader}>
                Text Align
              </Typography>
              <TextAlignOption
                options={options}
                handleOptionsChange={handleOptionsChange}
              />
            </Grid>
          </>
        )}
        {type === "line" && (
          <>
            <Grid item xs={12}>
              <Typography className={classes.optionHeader}>
                Stroke Width
              </Typography>
              <StrokeWidthOption
                options={options}
                handleOptionsChange={handleOptionsChange}
              />
            </Grid>
          </>
        )}
        {/* <Grid item xs={12}>
          <Typography className={classes.optionHeader}>Actions</Typography>
        </Grid> */}
      </Grid>
    </Paper>
  );
};

export default Options;
