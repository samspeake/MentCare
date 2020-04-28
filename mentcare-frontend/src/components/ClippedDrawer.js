import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { pages } from "../util/pages";
import Box from "@material-ui/core/Box";
import WelcomePage from "./WelcomePage";
import About from "./About";
import IndividualCareDashboard from "./dashboardComponents/IndividualCareDashboard";
import AdminReporting from "./AdminReporting";
import Alerts from "./Alerts";
import { alerts } from "../util/alerts";
import { Badge } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  iconMargin: {
    marginRight: -20,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [selectedPage, setSelectedPage] = React.useState(pages.WELCOME_PAGE);

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {["Individual Care", "Admin Reporting", "Alerts", "About"].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => setSelectedPage(index)}
              >
                <ListItemIcon className={classes.iconMargin}>
                  {index === pages.INDIVIDUAL_CARE ? (
                    <AccessibilityIcon />
                  ) : index === pages.ABOUT ? (
                    ((<About />), (<InfoIcon />))
                  ) : index === pages.ADMIN_REPORTING ? (
                    <SupervisorAccountIcon />
                  ) : index === pages.ALERTS ? (
                    <Badge
                      badgeContent={alerts.length}
                      color={alerts.length > 0 ? "error" : "secondary"}
                    >
                      <ErrorIcon />
                    </Badge>
                  ) : (
                    <InfoIcon />
                  )}
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography>
                      <Box
                        fontWeight={
                          index === selectedPage
                            ? "fontWeightBold"
                            : "fontWeightRegular"
                        }
                      >
                        {text}
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {selectedPage === pages.WELCOME_PAGE ? (
          <WelcomePage />
        ) : selectedPage === pages.INDIVIDUAL_CARE ? (
          <IndividualCareDashboard />
        ) : selectedPage === pages.ADMIN_REPORTING ? (
          <AdminReporting />
        ) : selectedPage === pages.ALERTS ? (
          <Alerts />
        ) : selectedPage === pages.ABOUT ? (
          ((<InfoIcon />), (<About />))
        ) : (
          <InfoIcon />
        )}
      </main>
    </div>
  );
}
