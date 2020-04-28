import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardActions,
  Button,
  CardContent,
  Typography,
  Popover,
  TextField,
  Backdrop,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex-wrap",
    flexDirection: "row",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  grid: {
    padding: theme.spacing(),
  },
  typography:{
    padding:theme.spacing(2),
    fontWeight:"bold",
    border: ".5px dotted",
  },
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

export default function NurseDashboard() {
  const classes = useStyles();
  const patient = useSelector((state) => state.patient);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover2" : undefined;

  return (
    <Card>
      <CardContent>
        <Typography component="h6" variant="h6">
          Nurse Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button  variant="contained" color="primary" onClick={handleClick}>
          Edit Patient Records
        </Button>
        <Backdrop className={classes.backdrop} 
          open={open}
          onClick={handleClose}>
        </Backdrop>
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
          <Grid
          container
          style={{ margin:0, width: '100%', }}
          className={classes.grid}
          >
        <Grid item>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              handleClose();
              e.preventDefault();
            }}
          >
            <TextField
              label="Enter record"
              defaultValue={patient.history}
              variant="outlined"
              multiline
            />
          </form>
          </Grid>
          </Grid>
        </Popover>
        <Button variant="contained" onClick={handleClick2}>
          View Patient Records
        </Button>
        <Popover
          id={id2}
          open={open2}
          anchorEl={anchorEl2}
          onClose={handleClose2}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography} >{patient.history}</Typography>
        </Popover>
      </CardActions>
    </Card>
  );
}
