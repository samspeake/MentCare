import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardActions,
  Button,
  CardContent,
  Typography,
  Popover,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    flexDirection: "row",
  },
  typography:{
    padding:theme.spacing(2),
    display:"flex",
    fontWeight:"bold",
    border: ".5px dotted",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ManagerDashboard() {
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
          Manager Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Export Statistics
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography}>
            Not enought data for statistical analysis.
          </Typography>
        </Popover>
        <CSVLink data={[Object.keys(patient), Object.values(patient)]}>
          <Button variant="contained" onClick={handleClick2}>
            Generate Patient Report
          </Button>
        </CSVLink>
      </CardActions>
    </Card>
  );
}
