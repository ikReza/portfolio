import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Avatar, Hidden } from "@material-ui/core";

import MainFooter from "../MainFooter";
import { useStyles } from "./styles";

import profileImg from "../assets/card.jpg";
import { CONTENTS } from "./contents";

//JSX
const About = () => {
  const classes = useStyles();

  return (
    <Box component="div">
      <Box component="div" className={classes.box1}>
        <Grid container justify="center">
          <Grid item xs={11} sm={8} md={9}>
            <Box className={classes.card}>
              <Hidden xsDown>
                <img
                  src={profileImg}
                  alt="Ibrahim Kaiser"
                  className={classes.circle}
                />
              </Hidden>
              <Hidden smUp>
                <img
                  src={profileImg}
                  alt="Ibrahim Kaiser"
                  className={classes.mblCircle}
                />
              </Hidden>
              <Typography
                variant="h5"
                gutterBottom
                style={{ color: "tomato", fontWeight: 150 }}
              >
                Hi, This is Kaiser,
              </Typography>
              <Typography component="p" gutterBottom className={classes.text}>
                a graduate from Civil Engineering department of Bangladesh
                University of Engineering and Technology (BUET). I live in
                Dhaka, the capital of Bangladesh.
              </Typography>
              <br />
              <Typography component="p" gutterBottom className={classes.text}>
                Since my graduation, I have been investing time to add some
                extra skills to my profile. I have learned Machine Learning
                using python, MERN Stack for web development. I have finished
                courses mainly from Udemy and Coursera and took help from some
                other online resources e.g. StackOverflow, Youtube. Using these
                skills I did some hands-on projects too which are added in the{" "}
                {
                  <Link
                    style={{ textDecoration: "none", color: "#66FCF1" }}
                    to="/portfolio"
                  >
                    portfolio
                  </Link>
                }{" "}
                section.
              </Typography>
              <br />
              <Typography component="p" gutterBottom className={classes.text}>
                Apart from my academic life, I also enjoy sharing life updates
                in my social networks. I have some other hobbies like -
                travelling, dancing, photography.
              </Typography>
              <br />
              <Typography component="p" gutterBottom className={classes.text}>
                Thanks for stopping by!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={11} sm={8} md={9}>
            <Box
              style={{
                padding: "10px",
                margin: "3vh auto",
                background: "#233",
              }}
              borderTop={5}
            >
              <Typography style={{ display: "block", color: "tomato" }}>
                Things I love:
              </Typography>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {CONTENTS.map((item, idx) => (
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      key={idx}
                    >
                      <Avatar
                        alt={item.name}
                        src={item.src}
                        className={classes.avatar}
                      />
                      <Typography className={classes.text}>
                        {item.name}
                      </Typography>
                    </Box>
                  ))}
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <MainFooter />
    </Box>
  );
};

export default About;
