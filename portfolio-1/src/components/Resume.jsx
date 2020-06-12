import React from "react";
import Navbar from "./Navbar";
import { Typography, Box, Grid, IconButton, Tooltip } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { Email, LinkedIn, GitHub } from "@material-ui/icons";
import { Link } from "react-router-dom";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
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
    <>
      <Navbar />
      <Box component="div" style={{ background: "#233" }}>
        <Grid container justify="center">
          <Grid item xs={8} sm={5} md={4}>
            <Box
              style={{
                margin: "1vh auto 3vh auto",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h3"
                  align="center"
                  style={{ color: "tomato" }}
                >
                  Ibrahim Kaiser
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>

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
        <Grid container justify="center">
          <Grid item xs={7} sm={4} md={3}>
            <Box
              style={{
                background: "tomato",
                margin: "4vh auto 1vh auto",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "whitesmoke" }}
                >
                  Education
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={11} sm={10}>
            <Box
              style={{
                margin: "1vh auto",
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
                margin: "1vh auto",
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
        <Grid container justify="center">
          <Grid item xs={7} sm={4} md={3}>
            <Box
              style={{
                background: "tomato",
                margin: "4vh auto 3vh auto",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "white" }}
                >
                  Skills
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={1}>
          <Grid item xs={5} sm={2}>
            <Box style={{ padding: "2%" }}>
              <Typography
                gutterBottom
                align="center"
                style={{ color: "whitesmoke" }}
              >
                Software
              </Typography>
              <ul>
                <Typography style={{ color: "tan" }} component="li">
                  AutoCAD
                </Typography>
                <Typography style={{ color: "tan" }} component="li">
                  ETABS
                </Typography>
                <Typography style={{ color: "tan" }} component="li">
                  SketchUp
                </Typography>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={5} sm={2}>
            <Box style={{ padding: "2%" }}>
              <Typography
                gutterBottom
                align="center"
                style={{ color: "whitesmoke" }}
              >
                Programming
              </Typography>
              <ul>
                <Typography style={{ color: "tan" }} component="li">
                  C++
                </Typography>
                <Typography style={{ color: "tan" }} component="li">
                  Python
                </Typography>
                <Typography style={{ color: "tan" }} component="li">
                  JavaScript
                </Typography>
                <Typography style={{ color: "tan" }} component="li">
                  Machine Learning
                </Typography>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={5} sm={2}>
            <Box style={{ padding: "2%" }}>
              <Typography
                gutterBottom
                align="center"
                style={{ color: "whitesmoke" }}
              >
                Frontend
              </Typography>
              <ul>
                <Typography style={{ color: "tan" }} component="li">
                  ReactJS
                </Typography>
                <Typography style={{ color: "tan" }} component="li">
                  HTML
                </Typography>
                <Typography style={{ color: "tan" }} component="li">
                  CSS3
                </Typography>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={5} sm={2}>
            <Box style={{ padding: "2%" }}>
              <Typography
                gutterBottom
                align="center"
                style={{ color: "whitesmoke" }}
              >
                Backend
              </Typography>
              <ul>
                <Typography style={{ color: "tan" }} component="li">
                  NodeJS
                </Typography>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={5} sm={2}>
            <Box style={{ padding: "2%" }}>
              <Typography
                gutterBottom
                align="center"
                style={{ color: "whitesmoke" }}
              >
                Database
              </Typography>
              <ul>
                <Typography style={{ color: "tan" }} component="li">
                  MongoDB
                </Typography>
              </ul>
            </Box>
          </Grid>
        </Grid>

        {/* Extra-Curricular Activities */}
        <Grid container justify="center">
          <Grid item xs={7} sm={4} md={3}>
            <Box
              style={{
                background: "tomato",
                margin: "4vh auto 1vh auto",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "white" }}
                >
                  Extra-Curricular Activities
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>

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
                  2018’, (the biggest and most hyped show in BUET, with
                  performers from different university and international guests)
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
        <Grid container justify="center">
          <Grid item xs={7} sm={4} md={3}>
            <Box
              style={{
                background: "tomato",
                margin: "4vh auto 1vh auto",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "white" }}
                >
                  Online Judge Information
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>

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
      </Box>
    </>
  );
};

export default Resume;
