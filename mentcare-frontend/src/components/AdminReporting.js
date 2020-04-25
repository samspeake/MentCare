import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Card, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { rights } from "../util/rights";
import { reportTimes, reportTypes } from "../util/reports";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { CSVLink } from "react-csv";
import firebase from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  spacing: {
    maring: theme.spacing(1),
  },
  alignText: {
    position: "absolute",
    left: "40%",
    top: "20%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 10,
  },
  button: {
    margin: theme.spacing(3),
  },
}));

var db = firebase.database();

export default function AdminReporting() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [allPatients, setAllPatients] = useState([]);

  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    const dbRef = db.ref("database");
    dbRef.on("value", (snapshot) => {
      let collections = snapshot.val();
      setAllPatients(Object.values(collections.Patients));
    });
  }, []);

  if (allPatients.length > 0) {
    console.log([
      Object.keys(allPatients[0]),
      ...allPatients.map((p) => Object.values(p)),
    ]);
  }

  return user.rights < rights.DOCTOR ? (
    <div className={classes.alignText}>
      <Typography variant="subtitle1">
        Please sign in using an HSA ID with higher rights to access
        administrative reporting.
      </Typography>
    </div>
  ) : (
    <div className={classes.root}>
      <Card>
        <div className={classes.row}>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="month-select">Month</InputLabel>
              <Select
                labelId="month-select"
                id="month-select-helper"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {reportTimes.map((month) => (
                  <MenuItem value={month}>{month}</MenuItem>
                ))}
              </Select>
              <FormHelperText>
                Type to quickly find who you're looking for
              </FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="type-select">Report Type</InputLabel>
              <Select
                labelId="type-select"
                id="type-select-helper"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {reportTypes.map((type) => (
                  <MenuItem value={type}>{type}</MenuItem>
                ))}
              </Select>
              <FormHelperText>
                Type to quickly find who you're looking for
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <CSVLink data={allPatients ? allPatients : []}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Export
              </Button>
            </CSVLink>
          </div>
        </div>
      </Card>
    </div>
  );
}
