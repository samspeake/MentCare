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
    display: "flex",
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
    padding:theme.spacing(1),
    display:"flex",
    fontWeight:"bold",
    border: ".5px dotted",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

export default function MedicalReceptionistDashboard() {
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
          Receptionist Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Register Patient
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
          justify="flex-end"
          direction="column"
          className={classes.grid}
          >
        <Grid item>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {Object.keys(patient).map((key) => (
              <TextField label={key} variant="outlined" />
            ))}
          </form>
          </Grid>
          <Grid item container justify="flex-end">
            <Button variant="contained" onClick={handleClose}>
              Register 
            </Button>
          </Grid>
          </Grid>
        </Popover>
        <Button variant="contained" onClick={handleClick2}>
          View Patient Info
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
          {Object.values(patient).map((p) => (
            <Typography className={classes.typography}>{p}</Typography>
          ))}
        </Popover>
      </CardActions>
    </Card>
  );
}
