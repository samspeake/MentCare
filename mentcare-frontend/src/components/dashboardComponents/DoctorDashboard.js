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
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";

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
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "200",
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
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              handleClose();
              e.preventDefault();
            }}
          >
            <TextField id="datetime-local" 
            label="Enter date and time" 
            variant="outlined"
            type="datetime-local"
            className={classes.root}
            InputLabelProps={{
              shrink:true,
            }}
           />
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
