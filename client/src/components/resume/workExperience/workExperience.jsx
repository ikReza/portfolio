import React from "react";
import { Box, Grid, Typography, Paper } from "@material-ui/core";
import { DateRange } from "@material-ui/icons";

import TopicHeader from "../topicHeader";

import "./workExperience.scss";

const Container = ({ children }) => (
  <Grid item xs={11} sm={10}>
    <Box className="edu-container">{children}</Box>
  </Grid>
);

const WorkExperience = () => {
  return (
    <div>
      <TopicHeader>Work Experience</TopicHeader>

      <Grid container justify="center">
        <Container>
          <Paper elevation={4} className="work-place">
            Nippon Koei Bangladesh
          </Paper>
          <div className="work-details">
            <Typography className="work-role">Junior Civil Engineer</Typography>
            <Typography className="work-span">
              Dhaka, BD | <DateRange className="work-date" /> May'21 - Present
            </Typography>
          </div>
          <ul className="work-list">
            <li>Dhaka Mass Rapid Transit Development Project (MRT Line-1)</li>
            <li>
              Assist in analyzing CAD design requirements for Struct. Design
              Unit Section
            </li>
            <li>
              Assist in analyzing signage design requirements for Arch. Design
              Unit Section
            </li>
          </ul>
        </Container>
      </Grid>

      <Grid container justify="center">
        <Container>
          <Paper elevation={4} className="work-place">
            Huadu (Shanghai) Architecture & Urban Design(HDD)华都设计
          </Paper>
          <div className="work-details">
            <Typography className="work-role">
              Environmental Engineer
            </Typography>
            <Typography className="work-span">
              Dhaka, BD | <DateRange className="work-date" /> Dec'20 - May'21
            </Typography>
          </div>
          <ul className="work-list">
            <li>
              Provide technical advice regarding design, construction, or
              program modifications and structural repairs to managerial
              personnel
            </li>
            <li>
              Provide expert engineering service regarding all environmentally
              related activities
            </li>
            <li>
              Prepare report on regular progress and different project issues
            </li>
            <li>
              Analyze survey reports, maps, drawings, blueprints, aerial
              photography, and other topographical or geographical data to plan
              projects
            </li>
          </ul>
        </Container>
      </Grid>
    </div>
  );
};

export default WorkExperience;
