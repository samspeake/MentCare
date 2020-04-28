import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AlertCard({ type, severity, message }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography
            className={classes.title}
            color={severity === 1 ? "textSecondary" : "error"}
            gutterBottom
          >
            New Alert
          </Typography>
          <Typography color={severity === 1 ? "textSecondary" : "error"}>
            {severity === 1 ? "Not Severe" : "Severe"}
          </Typography>
        </Grid>

        <Typography className={classes.pos} variant="h5" component="h2">
          {type}
        </Typography>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}
