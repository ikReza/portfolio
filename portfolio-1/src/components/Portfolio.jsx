import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { GitHub, Language, ExpandMore } from "@material-ui/icons";

import Navbar from "./Navbar";
import { MACHINE, WEB, FRONTEND } from "./projects";
import MainFooter from "./MainFooter";
import ProjectNavigation from "./ProjectNavigation";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  media: {
    height: "25vh",
    width: "90%",
    display: "flex",
    alignItems: "center",
    transition: "0.6s",
    opacity: 0.7,
    "&:hover": {
      height: "31vh",
      width: "100%",
      opacity: 1,
    },
  },
  mainContainer: {
    height: "100%",
    background: "#233",
  },
  cardContainer: {
    height: "46vh",
    maxWidth: "345px",
    margin: "3rem auto",
    background: "#D3D3D3",
    transition: "0.6s",
    "&:hover": {
      background: "black",
      color: "tomato",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnLeft: {
    color: "tomato",
    border: "1px solid tomato",
    width: "40%",
    "&:hover": {
      background: "#333",
    },
  },
  btnRight: {
    color: "tomato",
    border: "1px solid tomato",
    width: "40%",
    "&:hover": {
      background: "#333",
    },
  },
  root: {
    backgroundColor: "#C5C6C7",
  },
  rootBody: {
    backgroundColor: "#C5CBE3",
  },
}));

const Portfolio = () => {
  const [hoverL, setHoverL] = useState(false);
  const [hoverR, setHoverR] = useState(false);
  const [ID, setID] = useState(-1);
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <ProjectNavigation />
      <Grid container id="machine-learning">
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={8} md={6}>
          <Box
            style={{
              margin: "3vh auto",
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h4" style={{ color: "tomato" }}>
                Machine Learning Projects:
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={2}>
        {MACHINE.map((m, i) => (
          <Grid item xs={11} sm={8} md={5} key={i}>
            <Box component="div" style={{ background: "#D3D3D3" }}>
              <ReactPlayer width="100%" height="30vh" controls url={m.url} />
              <Box style={{ padding: "2%" }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.root}
                  >
                    <Typography className={classes.rootSummary}>
                      {m.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.rootBody}>
                    <Typography style={{ textAlign: "justify" }}>
                      {m.desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={8} md={6}>
          <Box
            style={{
              margin: "5vh auto 0 auto",
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h4" style={{ color: "tomato" }}>
                Web Development Projects:
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>

      <Grid container id="fullstack">
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={8} md={6}>
          <Box
            style={{
              margin: "5vh auto 0 auto",
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h4" style={{ color: "tomato" }}>
                Full Stack:
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={1}>
        {WEB.map((p) => (
          <Grid item xs={11} sm={8} md={6} key={p.id}>
            <Card className={classes.cardContainer}>
              <Box className={classes.imgContainer}>
                <img alt={p.name} src={p.image} className={classes.media} />
              </Box>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {p.name}
                </Typography>
                <Typography variant="subtitle2">{p.description}</Typography>
              </CardContent>
              <CardActions className={classes.btnBox}>
                <Button
                  size="small"
                  color="primary"
                  onMouseEnter={() => {
                    setHoverL(true);
                    setID(p.id);
                  }}
                  onMouseLeave={() => {
                    setHoverL(false);
                    setID(-1);
                  }}
                  className={classes.btnLeft}
                  onClick={() => window.open(p.gitLink)}
                >
                  {hoverL && ID === p.id ? <GitHub /> : "Github"}
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onMouseEnter={() => {
                    setHoverR(true);
                    setID(p.id);
                  }}
                  onMouseLeave={() => {
                    setHoverR(false);
                    setID(-1);
                  }}
                  className={classes.btnRight}
                  onClick={() => window.open(p.webLink)}
                >
                  {hoverR && ID === p.id ? <Language /> : "Live Demo"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container id="frontend">
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={8} md={6}>
          <Box
            style={{
              margin: "5vh auto 0 auto",
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h4" style={{ color: "tomato" }}>
                Frontend:
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={1}>
        {FRONTEND.map((p) => (
          <Grid item xs={11} sm={8} md={6} key={p.id}>
            <Card className={classes.cardContainer}>
              <Box className={classes.imgContainer}>
                <img alt={p.name} src={p.image} className={classes.media} />
              </Box>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {p.name}
                </Typography>
                <Typography variant="subtitle2">{p.short_desc}</Typography>
              </CardContent>
              <CardActions className={classes.btnBox}>
                <Button
                  size="small"
                  color="primary"
                  onMouseEnter={() => {
                    setHoverL(true);
                    setID(p.id);
                  }}
                  onMouseLeave={() => {
                    setHoverL(false);
                    setID(-1);
                  }}
                  className={classes.btnLeft}
                  onClick={() => window.open(p.gitLink)}
                >
                  {hoverL && ID === p.id ? <GitHub /> : "Github"}
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onMouseEnter={() => {
                    setHoverR(true);
                    setID(p.id);
                  }}
                  onMouseLeave={() => {
                    setHoverR(false);
                    setID(-1);
                  }}
                  className={classes.btnRight}
                  onClick={() => window.open(p.webLink)}
                >
                  {hoverR && ID === p.id ? <Language /> : "Live Demo"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <MainFooter />
    </Box>
  );
};

export default Portfolio;
