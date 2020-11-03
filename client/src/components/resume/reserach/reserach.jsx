import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import TopicHeader from "../topicHeader";

import "./research.scss";

const Reserach = () => {
  return (
    <div>
      <TopicHeader>Manuscript Under Review</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto 0 auto",
              padding: "2%",
            }}
          >
            <Typography className="research-topic">
              <strong>Ibrahim Kaiser</strong>, Md. Jamil Ahsan,{" "}
              <span
                onClick={() =>
                  window.open(
                    "https://ce.buet.ac.bd/profile-of-md-shamsul-hoque/"
                  )
                }
                className="research-prof"
              >
                MD. Shamsul Hoque
              </span>
              ,{" "}
              <em>
                “Application of Stress Induced Piezoelectric Harvesters in the
                Context of Bangladesh”
              </em>
            </Typography>
            <ul className="research-objectives">
              <li>
                to examine the potential of the self-made piezoelectric device
                using the locally available materials
              </li>
              <li>
                to analyze the result and to find a relationship with the
                applied load and generated electricity by the device via the
                quantitative analysis of the results
              </li>
              <li>
                to determine the feasibility and financial prospect of the
                device in the context of Bangladesh by comparing the results and
                finding ways of improvements
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reserach;
