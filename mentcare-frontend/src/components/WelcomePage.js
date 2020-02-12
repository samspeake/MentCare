import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  alignText: {
    position: "absolute",
    left: "40%",
    top: "20%"
  }
}));

export default function WelcomePage() {
  const classes = useStyles();
  return (
    <div className={classes.alignText}>
      <Typography variant="h4">Welcome to MentCare!</Typography>
      <Typography variant="subtitle1">
        Select a page from the left to get started.
      </Typography>
    </div>
  );
}
