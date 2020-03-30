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

export default function NurseDashboard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography component="h6" variant="h6">
          Nurse Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary">
          View Patient Records
        </Button>
        <Button variant="contained">Edit Patient Records</Button>
      </CardActions>
    </Card>
  );
}
