import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, Language } from "@material-ui/icons";

import Navbar from "./Navbar";
import PROJECTS from "./projects";

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
      <Grid container justify="center" spacing={1}>
        {PROJECTS.map((p) => (
          <Grid item xs={12} sm={8} md={6} key={p.id}>
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
    </Box>
  );
};

export default Portfolio;
