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
  root: {
    marginRight: theme.spacing(2)
  },
  actions: {
    display: "flex",
    flexDirection: "row"
  }
}));

export default function ManagerDashboard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography component="h6" variant="h6">
          Manager Options
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary">
          Export Statistics
        </Button>
        <Button variant="contained">Generate Patient Report</Button>
      </CardActions>
    </Card>
  );
}
