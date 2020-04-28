import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { alerts } from "../util/alerts";
import AlertCard from "./AlertCard";
import { useSelector } from "react-redux";
import { rights } from "../util/rights";

const useStyles = makeStyles((theme) => ({
  alignText: {
    position: "absolute",
    left: "40%",
    top: "20%",
  },
  root:{
    display: "flex",
  },
}));

export default function Alerts() {
  const user = useSelector((state) => state.user);
  const classes = useStyles();

  return user.rights === rights.NONE ? (
    <div className={classes.alignText}>
      <Typography variant="subtitle1">
        Please sign in using your HSA ID to access the individual care
        dashboard.
      </Typography>
    </div>
  ) : (
    <div className={classes.root}>
    <div className="About">
      <Box fontSize="h6.fontSize" textAlign="center">
        No action is needed here, alerts live in the database so they'll
        automatically be dismissed when the issue is no longer present.
      </Box>
      <Grid container spacing={10} style={{ margin:0, width: '100%', }}>
        {alerts.map((alert) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <AlertCard
              type={alert.type}
              severity={alert.severity}
              message={alert.message}
            />
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
  );
}
