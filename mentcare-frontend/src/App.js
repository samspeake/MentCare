import React from "react";
import "./App.css";
import ClippedDrawer from "./components/ClippedDrawer";
import { makeStyles, CssBaseline } from "@material-ui/core";
import ApplicationBar from "./components/ApplicationBar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <ApplicationBar />
        <ClippedDrawer />
      </div>
    </div>
  );
}

export default App;
