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
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { GitHub, Language } from "@material-ui/icons";

import Navbar from "./Navbar";
import PROJECTS from "./projects";
import MainFooter from "./MainFooter";

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
}));

const Portfolio = () => {
  const [hoverL, setHoverL] = useState(false);
  const [hoverR, setHoverR] = useState(false);
  const [ID, setID] = useState(-1);
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container>
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

      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6}>
          <Box component="div" style={{ background: "#D3D3D3" }}>
            <ReactPlayer
              width="100%"
              height="30vh"
              controls
              url="https://youtu.be/mgmHRLrhbmc"
            />
            <Box style={{ padding: "2%" }}>
              <Typography style={{ marginTop: "1vh", textAlign: "justify" }}>
                This is a simple project using computer vision with YOLOv3.
                YOLOv3 is an algorithm that uses deep convolutional neural
                networks to perform object detection. I used YOLOv3-416 model
                and COCO dataset. The mAP (mean Average Precision) of this model
                is 55.3.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={8} md={6}>
          <Box
            style={{
              margin: "3vh auto",
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
      <Grid container justify="center" spacing={1}>
        {PROJECTS.map((p) => (
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
      <MainFooter />
    </Box>
  );
};

export default Portfolio;
