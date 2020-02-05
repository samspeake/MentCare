import React from "react";
import "./App.css";
import NavigationSuite from "./components/NavigationSuite";
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
        <NavigationSuite />
      </div>
    </div>
  );
}

export default App;
