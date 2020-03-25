import React from "react";
import "./App.css";
import ClippedDrawer from "./components/ClippedDrawer";
import { makeStyles, CssBaseline } from "@material-ui/core";
import ApplicationBar from "./components/ApplicationBar";
import About from "./components/About";
import WelcomePage from "./components/WelcomePage";
import PeopleCard from "./components/PeopleCard";
import {Route, NavLink, Switch} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
     {//</div>/<div className={classes.root}>
     }
     <Route>
     <CssBaseline />
     <ApplicationBar />
     <ClippedDrawer />
     {/* <Switch>
        <Route exact path ="/" component={About} />
        />
        
     </Switch> */}
     {/* <div className = "nav">
     <Route exact to="/" component = {WelcomePage} />

       <NavLink exact to = "/" activeClassName = "active">Home</NavLink>
       <NavLink exact to = "/about" activeClassName = "active">About</NavLink>
     </div>
     <Route render = {({location}) => (
       
     
       <Switch location={location}>
      <Route exact path="/" component = {WelcomePage} />
      <Route exact path="/About" component = {About}/>
      </Switch> */}
        {/* <CssBaseline />
        // <ApplicationBar />
        // <ClippedDrawer />
        // <About /></Route> */}
        </Route>     
     </div>
  );
}

export default App;
