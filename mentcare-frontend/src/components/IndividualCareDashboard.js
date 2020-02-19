import React from "react";
import { makeStyles } from "@material-ui/core";
import SelectPatient from "./SelectPatient";

const useStyles = makeStyles(theme => ({}));

export default function IndividualCareDashboard() {
  const classes = useStyles();

  return <SelectPatient></SelectPatient>;
}
