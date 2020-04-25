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
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    flexDirection: "row",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
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
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
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
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          {Object.values(patient).map((p) => (
            <Typography className={classes.root}>{p}</Typography>
          ))}
        </Popover>
      </CardActions>
    </Card>
  );
}
