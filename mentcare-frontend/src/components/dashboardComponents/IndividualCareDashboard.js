import React from "react";
import { makeStyles } from "@material-ui/core";
import SelectPatient from "./SelectPatient";
import MedicalReceptionistDashboard from "./MedicalReceptionistDashboard";
import ManagerDashboard from "./ManagerDashboard";
import NurseDashboard from "./NurseDashboard";
import DoctorDashboard from "./DoctorDashboard";

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
  }
}));

export default function IndividualCareDashboard() {
  const classes = useStyles();

  return (
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
