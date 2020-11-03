import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import TopicHeader from "../topicHeader";

import "./education.scss";

const Container = ({ children }) => (
  <Grid item xs={11} sm={10}>
    <Box className="edu-container">{children}</Box>
  </Grid>
);

const Education = () => {
  return (
    <div>
      <TopicHeader>Education</TopicHeader>

      <Grid container justify="center">
        <Container>
          <Typography
            className="edu-institution"
            onClick={() => window.open("https://www.buet.ac.bd/web/")}
          >
            Bangladesh University of Engineering and Technology (BUET)
          </Typography>
          <ul className="edu-list">
            <li>BSc in Civil Engineering</li>
            <li>
              <em>Thesis:</em> “Design, Construction and Quality Control of
              Driven Concrete Pile.”
            </li>
          </ul>
        </Container>
        <Container>
          <Typography className="edu-institution">Milestone College</Typography>
          <ul className="edu-list">
            <li>Higher Secondry Certificate (HSC)</li>
          </ul>
        </Container>
        <Container>
          <Typography className="edu-institution">
            Rajendrapur Cantonment Public School and College
          </Typography>
          <ul className="edu-list">
            <li>Secondary School Certificate (SSC)</li>
          </ul>
        </Container>
      </Grid>
    </div>
  );
};

export default Education;
