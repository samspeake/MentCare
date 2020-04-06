import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import SelectPatient from "./SelectPatient";
import MedicalReceptionistDashboard from "./MedicalReceptionistDashboard";
import ManagerDashboard from "./ManagerDashboard";
import NurseDashboard from "./NurseDashboard";
import DoctorDashboard from "./DoctorDashboard";
import { useSelector } from "react-redux";
import { rights } from "../../util/rights";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(1),
    justifyContent: "space-evenly"
  },
  spacing: {
    maring: theme.spacing(1)
  },
  alignText: {
    position: "absolute",
    left: "40%",
    top: "20%"
  }
}));

export default function IndividualCareDashboard() {
  const classes = useStyles();
  const user = useSelector(state => state.user);

  return user.rights === rights.NONE ? (
    <div className={classes.alignText}>
      <Typography variant="subtitle1">
        Please sign in using your HSA ID to access the individual care
        dashboard.
      </Typography>
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.row}>
        <SelectPatient />
      </div>
      <div className={classes.row}>
        <MedicalReceptionistDashboard />
        <NurseDashboard />
      </div>
      <div className={classes.row}>
        <ManagerDashboard />
        <DoctorDashboard />
      </div>
    </div>
  );
}
