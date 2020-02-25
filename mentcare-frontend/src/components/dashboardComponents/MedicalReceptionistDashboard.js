import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  Button,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  actions: {
    display: "flex",
    flexDirection: "row"
  }
}));

export default function MedicalReceptionistDashboard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography component="h6" variant="h6">
          Receptionist Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary">
          Register Patient
        </Button>
        <Button variant="contained">View Patient Info</Button>
      </CardActions>
    </Card>
  );
}
