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

export default function DoctorDashboard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography component="h6" variant="h6">
          Doctor Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary">
          Setup Consultation
        </Button>
        <Button variant="contained">Create Patient Report</Button>
      </CardActions>
    </Card>
  );
}
