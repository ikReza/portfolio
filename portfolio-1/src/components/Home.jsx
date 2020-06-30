import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ContactFooter from "./ContactFooter";

const useStyles = makeStyles(() => ({
  particlesCanva: {
    position: "absolute",
    opacity: "0.3",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={{ maxHeight: "100vh" }}>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        height="90vh"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
        }}
      />
      <Box component="div" style={{ marginBottom: "auto" }}>
        <ContactFooter />
      </Box>
    </Box>
  );
};

export default Home;
