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

<<<<<<< HEAD
const useStyles = makeStyles(() => ({
=======
const useStyles = makeStyles((theme) => ({
>>>>>>> 73b70ecf5993afc5800f8d70b6d20a38aa50bb3b
  mainContainer: {
    background: "#233",
    color: "tomato",
  },

  icon: {
    color: "tan",
  },
  btn: {
    "&:hover": {
      background: "rgb(0,128,128, 0.2)",
    },
  },
  buet: {
    color: "whitesmoke",
    "&:hover": {
      color: "#66FCF1",
      cursor: "pointer",
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
      <TopicHeader>Education</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto 0 auto",
              padding: "2%",
            }}
          >
            <Typography
              className={classes.buet}
              gutterBottom
              onClick={() => window.open("https://www.buet.ac.bd/web/")}
            >
              Bangladesh University of Engineering and Technology (BUET)
            </Typography>
            <Typography style={{ fontSize: "0.9rem", color: "tan" }}>
              BSc in Civil Engineering
            </Typography>
            <Typography style={{ color: "tan", fontSize: "0.9rem" }}>
              <em>Thesis:</em> “Design, Construction and Quality Control of
              Driven Concrete Pile.”
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto 0 auto",
              padding: "2%",
            }}
          >
            <Typography gutterBottom style={{ color: "whitesmoke" }}>
              Milestone College
            </Typography>
            <Typography style={{ color: "tan", fontSize: "0.9rem" }}>
              Higher Secondry Certificate (HSC)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto",
              padding: "2%",
            }}
          >
            <Typography gutterBottom style={{ color: "whitesmoke" }}>
              Rajendrapur Cantonment Public School and College
            </Typography>
            <Typography style={{ color: "tan", fontSize: "0.9rem" }}>
              Secondary School Certificate (SSC)
            </Typography>
          </Box>
        </Grid>
      </Grid>

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
      <TopicHeader>Online Courses</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto",
              padding: "2%",
            }}
          >
            <ul>
              <Typography style={{ color: "white" }} component="li">
                Introduction to TensorFlow for Artificial Intelligence, Machine
                Learning, and Deep Learning
              </Typography>
              <ul style={{ listStyle: "none" }}>
                <Typography style={{ color: "tan" }} component="li">
                  <em style={{ color: "#ebad05" }}>Issuing Organization: </em>
                  Coursera
                </Typography>
                <Typography
                  style={{ color: "tan" }}
                  component="li"
                  gutterBottom
                >
                  <em style={{ color: "#ebad05" }}>Credential URL: </em>{" "}
                  <span
                    className={classes.codeforce}
                    onClick={() =>
                      window.open(
                        "https://www.coursera.org/account/accomplishments/certificate/HLLVLGMRJG87"
                      )
                    }
                  >
                    See credential
                  </span>
                </Typography>
              </ul>

              <Typography style={{ color: "white" }} component="li">
                Traffic Sign Classification Using Deep Learning in Python/Keras
              </Typography>
              <ul style={{ listStyle: "none" }}>
                <Typography style={{ color: "tan" }} component="li">
                  <em style={{ color: "#ebad05" }}>Issuing Organization: </em>
                  Coursera
                </Typography>
                <Typography
                  style={{ color: "tan" }}
                  component="li"
                  gutterBottom
                >
                  <em style={{ color: "#ebad05" }}>Credential URL: </em>{" "}
                  <span
                    className={classes.codeforce}
                    onClick={() =>
                      window.open(
                        "https://www.coursera.org/account/accomplishments/certificate/8X2CQV3DNR82"
                      )
                    }
                  >
                    See credential
                  </span>
                </Typography>
              </ul>

              <Typography style={{ color: "white" }} component="li">
                Perform Real-Time Object Detection with YOLOv3
              </Typography>
              <ul style={{ listStyle: "none" }}>
                <Typography style={{ color: "tan" }} component="li">
                  <em style={{ color: "#ebad05" }}>Issuing Organization: </em>
                  Coursera
                </Typography>
                <Typography
                  style={{ color: "tan" }}
                  component="li"
                  gutterBottom
                >
                  <em style={{ color: "#ebad05" }}>Credential URL: </em>{" "}
                  <span
                    className={classes.codeforce}
                    onClick={() =>
                      window.open(
                        "https://www.coursera.org/account/accomplishments/certificate/UBU82JSXT7DY"
                      )
                    }
                  >
                    See credential
                  </span>
                </Typography>
              </ul>
            </ul>
          </Box>
        </Grid>
      </Grid>

      {/* Extra-Curricular Activities */}
      <TopicHeader>Extra-Curricular Activities</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto",
              padding: "2%",
            }}
          >
            <ul>
              <Typography style={{ color: "tan" }} component="li">
                President, BUET Dance Club
              </Typography>
              <Typography style={{ color: "tan" }} component="li">
                Organizer of ‘Inter University Dance Fest, BUET, Season-4,
                2018’, (the biggest and most hyped show in BUET, with performers
                from different university and international guests)
              </Typography>
              <Typography style={{ color: "tan" }} component="li">
                Organizer of “ECCENTRIC: Civil Engineering Festival,2018”
              </Typography>
              <Typography style={{ color: "tan" }} component="li">
                Member of Badhan(a voluntary blood donor’s organization)
              </Typography>
              <Typography style={{ color: "tan" }} component="li">
                Mess manager of Titumir Hall(dormitory) dining of 400 students
              </Typography>
            </ul>
          </Box>
        </Grid>
      </Grid>

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
