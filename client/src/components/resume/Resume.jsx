import React from "react";
import { Typography, Box, Grid, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email, LinkedIn, GitHub } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MainFooter from "../MainFooter";
import TopicHeader from "./topicHeader";

import { SKILLS } from "./skillList";

import "./resume.scss";
import MyName from "./myName";
import Reserach from "./reserach/reserach";
import Education from "./education/education";
import ExtraCurricular from "./extraCurricular/extraCurricular";
import OnlineCourses from "./onlineCourses/onlineCourses";

const useStyles = makeStyles(() => ({
  icon: {
    color: "tan",
  },
  btn: {
    "&:hover": {
      background: "rgb(0,128,128, 0.2)",
    },
  },
  codeforce: {
    "&:hover": {
      color: "#66FCF1",
      cursor: "pointer",
    },
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "#233" }}>
      <MyName />

      <Grid container justify="center" spacing={2}>
        <Grid item xs={11} sm={5}>
          <Box
            style={{
              padding: "2%",
              height: "17.6vh",
            }}
          >
            <Typography gutterBottom style={{ color: "whitesmoke" }}>
              Address
            </Typography>
            <Typography style={{ color: "tan", fontSize: "0.9rem" }}>
              H-328/3, Barua, W-08, khilkhet
            </Typography>
            <Typography style={{ color: "tan", fontSize: "0.9rem" }}>
              Dhaka-1229, Bangladesh
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={11} sm={5}>
          <Box style={{ padding: "2%" }}>
            <Typography
              gutterBottom
              style={{
                paddingLeft: "3%",
                color: "whitesmoke",
              }}
            >
              Contacts
            </Typography>
            <Typography
              style={{ paddingLeft: "3%", color: "tan", fontSize: "0.9rem" }}
            >
              Cell: +880 1521106592
            </Typography>
            <Box style={{ display: "flex", justifyContent: "flex-start" }}>
              <Tooltip title="Email">
                <IconButton
                  component={Link}
                  to="/contact"
                  className={classes.btn}
                >
                  <Email className={classes.icon} />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  className={classes.btn}
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/ibrahim-kaiser/")
                  }
                >
                  <LinkedIn className={classes.icon} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Github">
                <IconButton
                  className={classes.btn}
                  onClick={() => window.open(" https://github.com/ikReza")}
                >
                  <GitHub className={classes.icon} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Education */}
      <Education />

      {/* Research */}
      <Reserach />

      {/* Skills */}
      <div className="skill-section">
        <TopicHeader>Skills</TopicHeader>
        <Grid container justify="center">
          <Grid item xs={11} sm={10} style={{ marginTop: "5vh" }}>
            <Grid container justify="center" spacing={2}>
              {Object.keys(SKILLS).map((k, idx) => (
                <Grid item xs={6} sm={4} md={3} className="skills" key={idx}>
                  <Typography gutterBottom className="skills-title">
                    {k}
                  </Typography>
                  <ul className="skills-lists">
                    {SKILLS[k].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* Online Courses */}
      <OnlineCourses />

      {/* Extra-Curricular Activities */}
      <ExtraCurricular />

      {/* Online Judge */}
      <TopicHeader>Online Judge</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto",
              padding: "2%",
            }}
          >
            <Typography
              gutterBottom
              style={{ color: "whitesmoke", textDecoration: "underline" }}
            >
              Codeforces:
            </Typography>
            <Typography style={{ color: "tan" }}>
              <em style={{ color: "#ebad05" }}>Profile:</em>{" "}
              <span
                className={classes.codeforce}
                onClick={() =>
                  window.open("https://codeforces.com/profile/ireza")
                }
              >
                https://codeforces.com/profile/ireza
              </span>
            </Typography>
            <Typography style={{ color: "tan" }}>
              <em style={{ color: "#ebad05" }}>Rating Point:</em> 1368
            </Typography>
            <Typography style={{ color: "tan" }}>
              <em style={{ color: "#ebad05" }}>Problem Solved:</em> 135
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <MainFooter />
    </Box>
  );
};

export default Resume;
