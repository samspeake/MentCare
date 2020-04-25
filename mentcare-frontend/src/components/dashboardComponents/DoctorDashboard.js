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
import { CSVLink } from "react-csv";

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

export default function DoctorDashboard() {
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

  const handleClick2 = (event) => {};

  return (
    <Card>
      <CardContent>
        <Typography component="h6" variant="h6">
          Doctor Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Setup Consultation
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
              handleClose();
              e.preventDefault();
            }}
          >
            <TextField label="Enter date and time" variant="outlined" />
          </form>
        </Popover>
        <CSVLink data={[Object.keys(patient), Object.values(patient)]}>
          <Button variant="contained" onClick={handleClick2}>
            Create Patient Report
          </Button>
        </CSVLink>
      </CardActions>
    </Card>
  );
}
