import React from "react";
import "./App.css";
import ClippedDrawer from "./components/ClippedDrawer";
import { CssBaseline } from "@material-ui/core";
import ApplicationBar from "./components/ApplicationBar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
        //</div>/<div className={classes.root}>
      }
      <Route>
        <CssBaseline />
        <ApplicationBar />
        <ClippedDrawer />
      </Route>
    </div>
  );
}

export default App;
