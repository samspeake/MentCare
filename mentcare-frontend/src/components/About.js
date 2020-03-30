import React from "react";
import { Typography, Box } from "@material-ui/core";
import PeopleCard from "./PeopleCard";
import MemberList from "./MemberList.json";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <div className="About">
      <Typography textAlign="center" fontStyle="bold" variant="h4">
        ABOUT US!
      </Typography>
      <Box
        fontFamily="BlinkMacSystemFont"
        fontStyle="bold"
        fontSize="h6.fontSize"
        textAlign="center"
      >
        We are MentCare, your online management of mental health patient
        information.
      </Box>
      <Box fontFamily="BlinkMacSystemFont" fontSize="h6.fontSize">
        Get to know our team below!
      </Box>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {MemberList.map(users => (
          <Grid key={users.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PeopleCard
              key={users.id}
              description={users.description}
              firstname={users.first_name}
              lastname={users.last_name}
              avatar={users.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
