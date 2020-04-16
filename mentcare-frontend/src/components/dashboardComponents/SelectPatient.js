import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";
import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: -18,
  },
}));

var db = firebase.database();

export default function SelectPatient(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState("");
  const [allPatients, setAllPatients] = useState(null);

  useEffect(() => {
    const dbRef = db.ref("database");
    dbRef.on("value", (snapshot) => {
      let collections = snapshot.val();
      setAllPatients(collections.Patients);
    });
  }, []);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <CardContent>
          <Typography component="h6" variant="h6">
            Please select a patient to open their dashboard.
          </Typography>
        </CardContent>
        {allPatients ? (
          <FormControl className={classes.formControl}>
            <InputLabel id="patient-select">Patient</InputLabel>

            <Select
              labelId="patient-select"
              id="patient-select-helper"
              value={selected}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"demo patient1"}>Demo Patient 1</MenuItem>
              <MenuItem value={"demo patient2"}>Demo Patient 2</MenuItem>
              <MenuItem value={"demo patient3"}>Demo Patient 3</MenuItem>
            </Select>

            <FormHelperText>
              Type to quickly find who you're looking for
            </FormHelperText>
          </FormControl>
        ) : (
          <CircularProgress />
        )}
      </div>
    </Card>
  );
}
