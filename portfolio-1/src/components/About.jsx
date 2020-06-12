import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "./About.css";
import { Box, Typography, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  box1: {
    width: "100%",
    background: "#659DBD",
  },
  card: { padding: "10px", textAlign: "justify", background: "#233" },
  circle: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    float: "left",
    shapeOutside: "circle()",
    margin: "30px",
  },
  text: {
    color: "tan",
  },
  avatar: {
    margin: "0.5rem 1rem",
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  box2: {
    background: "#557A95",
  },
  box3: {
    background: "#7395AE",
  },
}));

//JSX
const About = () => {
  const classes = useStyles();

  useEffect(() => {
    new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <Box component="div">
      <Navbar />
      <Box component="div" className={classes.box1}>
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Box className={classes.card}>
              <img
                src="assets/images/card.jpg"
                alt="Ibrahim Kaiser"
                className={classes.circle}
              />
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
          <Grid item xs={12} sm={8}>
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
                <Box
                  component="div"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="trekking"
                      src="/assets/images/trekking.jpg"
                      className={classes.avatar}
                    />
                    <Typography className={classes.text}>Trekking</Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="coffee"
                      src="/assets/images/coffee.jpg"
                      className={classes.avatar}
                    />
                    <Typography className={classes.text}>Coffee</Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="dance"
                      src="/assets/images/dance.jpg"
                      className={classes.avatar}
                    />
                    <Typography className={classes.text}>Dance</Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="tree planting"
                      src="/assets/images/tree.jpg"
                      className={classes.avatar}
                    />
                    <Typography className={classes.text}>
                      Planting Trees
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="video editing"
                      src="/assets/images/video.png"
                      className={classes.avatar}
                    />
                    <Typography className={classes.text}>
                      Video Editing
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* cool */}

      {/* <Box component="div" className="swiper-container">
        <Typography variant="h3" gutterBottom>
          Travelling
        </Typography>
        <div className="swiper-wrapper">
          <Card
            className="swiper-slide"
            style={{ backgroundImage: "url(assets/images/tour-1.jpg)" }}
          >
            <Box class="div">
              <Typography variant="h6">Phalut</Typography>
              <Typography component="p">West Bengal, India</Typography>
              <Button>Read More</Button>
            </Box>
          </Card>
          <Card
            className="swiper-slide"
            style={{ backgroundImage: "url(assets/images/tour-2.jpg)" }}
          >
            <Box class="div">
              <Typography variant="h6">Kohima</Typography>
              <Typography component="p">Nagaland, India</Typography>
              <Button>Read More</Button>
            </Box>
          </Card>
          <Card
            className="swiper-slide"
            style={{ backgroundImage: "url(assets/images/tour-3.jpg)" }}
          >
            <Box class="div">
              <Typography variant="h6">Dzukou Valley</Typography>
              <Typography component="p">Nagaland, India</Typography>
              <Button>Read More</Button>
            </Box>
          </Card>
        </div>

        <div className="swiper-pagination" />
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Box>

      <Box component="div" className="swiper-container">
        <Typography variant="h3" gutterBottom>
          Travelling
        </Typography>
        <div className="swiper-wrapper">
          <Card
            className="swiper-slide"
            style={{ backgroundImage: "url(assets/images/tour-1.jpg)" }}
          >
            <Typography variant="h4" style={{ color: "red" }}>
              Space
            </Typography>
          </Card>
          <Card
            className="swiper-slide"
            style={{ backgroundImage: "url(assets/images/tour-2.jpg)" }}
          ></Card>
          <Card
            className="swiper-slide"
            style={{ backgroundImage: "url(assets/images/tour-3.jpg)" }}
          ></Card>
        </div>

        <div className="swiper-pagination" />
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Box> */}
    </Box>
  );
};

export default About;
