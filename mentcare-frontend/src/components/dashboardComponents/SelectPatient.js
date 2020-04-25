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
import { useDispatch } from "react-redux";
import firebase from "../../firebase";
import { selectPatient } from "../../redux/actions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const dbRef = db.ref("database");
    dbRef.on("value", (snapshot) => {
      let collections = snapshot.val();
      setAllPatients(Object.values(collections.Patients));
    });
  }, []);

  const handleChange = (event) => {
    setSelected(event.target.value);
    let pa = allPatients.filter((p) => {
      return p.Name === event.target.value;
    });
    if (pa.length > 0) {
      dispatch(selectPatient(pa[0]));
    }
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
              value={selected ? selected : ""}
              onChange={handleChange}
            >
              {allPatients.map((p) => (
                <MenuItem value={p.Name}>{p.Name}</MenuItem>
              ))}
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
