import React from "react";
import { Box, Grid, Typography, Tooltip } from "@material-ui/core";

import TopicHeader from "../topicHeader";

import "./research.scss";

const Reserach = () => {
  return (
    <div>
      <TopicHeader>Research Paper</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto 0 auto",
              padding: "2%",
            }}
          >
            <Typography className="research-topic">
              <strong>Ibrahim Kaiser</strong>, Md. Jamil Ahsan ,{" "}
              <em>
                <Tooltip title="ResearchGate">
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.researchgate.net/publication/353466182_APPLICATION_OF_STRESS_INDUCED_PIEZOELECTRIC_HARVESTERS_IN_THE_CONTEXT_OF_BANGLADESH"
                      )
                    }
                    className="research-url"
                  >
                    “Application of Stress Induced Piezoelectric Harvesters in
                    the Context of Bangladesh”
                  </span>
                </Tooltip>
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
