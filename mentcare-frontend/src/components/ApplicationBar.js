import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Button, Popover, TextField } from "@material-ui/core";

import { performLogin, performLogout } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  login: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
}));

var db = firebase.database();

export default function ApplicationBar() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [loginId, setLoginId] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const [allUsers, setAllUsers] = useState(null);

  useEffect(() => {
    const dbRef = db.ref("database");
    dbRef.on("value", (snapshot) => {
      let collections = snapshot.val();
      setAllUsers(collections.Employees);
    });
  }, []);

  console.log(allUsers);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const attemptLogin = () => {
    const userLoggingIn = allUsers.find(
      (account) => account.id === parseInt(loginId)
    );
    if (userLoggingIn) {
      dispatch(performLogin(userLoggingIn));
      handleClose();
    } else {
      setLoginError(true);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" noWrap className={classes.title} align="left">
          MentCare
        </Typography>
        {user.id !== null ? (
          <Button
            edge="end"
            color="inherit"
            variant="outlined"
            onClick={() => dispatch(performLogout())}
          >
            Logout
          </Button>
        ) : (
          <Button
            edge="end"
            color="inherit"
            variant="outlined"
            aria-describedby={id}
            onClick={handleClick}
          >
            Login
          </Button>
        )}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              attemptLogin();
            }}
          >
            <TextField
              error={loginError}
              id="outlined-basic"
              label="HSA ID"
              variant="outlined"
              helperText={loginError ? "Incorrect login" : ""}
              onChange={(e) => {
                setLoginId(e.target.value);
                setLoginError(false);
              }}
            />
          </form>
        </Popover>
      </Toolbar>
    </AppBar>
  );
}
