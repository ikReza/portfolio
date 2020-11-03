import React from "react";
import TopicHeader from "../topicHeader";

import { Box, Grid } from "@material-ui/core";

import "./extraCurricular.scss";

const ExtraCurricular = () => {
  return (
    <div>
      <TopicHeader>Extra-Curricular Activities</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            className="extra-container"
            style={{
              margin: "1vh auto",
              padding: "2%",
            }}
          >
            <ul className="extra-list">
              <li>President, BUET Dance Club</li>
              <li>
                Organizer of ‘Inter University Dance Fest, BUET, Season-4,
                2018’, (the biggest and most hyped show in BUET, with performers
                from different university and international guests)
              </li>
              <li>Organizer of “ECCENTRIC: Civil Engineering Festival,2018”</li>
              <li>Member of Badhan(a voluntary blood donor’s organization)</li>
              <li>
                Mess manager of Titumir Hall(dormitory) dining of 400 students
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExtraCurricular;
