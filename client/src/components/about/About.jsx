import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid } from "@material-ui/core";

import MainFooter from "../MainFooter";
import profileImg from "../assets/card.jpg";

import "./about.scss";

//JSX
const About = () => {
  return (
    <>
      <div className="about-container">
        <Grid container justify="center">
          <Grid item xs={11} sm={8} md={9}>
            <Box className="about-box">
              <img
                src={profileImg}
                alt="Ibrahim Kaiser"
                className="about-img"
              />
              <Typography
                variant="h5"
                gutterBottom
                style={{ color: "tomato", fontWeight: 150 }}
              >
                Hi, This is Kaiser,
              </Typography>
              <Typography component="p" gutterBottom>
                a graduate from Civil Engineering department of Bangladesh
                University of Engineering and Technology (BUET). I live in
                Dhaka, the capital of Bangladesh.
              </Typography>
              <br />
              <Typography component="p" gutterBottom>
                First and foremost, I love writing code. I started with C++.
                Nothing is more thrilling to me than seeing all the test cases
                are green saying your code has been accepted. I use Codeforce
                and Hackerrank to solve programming related problems.
              </Typography>
              <br />
              <Typography component="p" gutterBottom>
                At some point, I saw a video of web development from my YouTube
                suggestions. That's the time when my JavaScript journey started.
                How frontend, backend, and database all are interconnected, how
                data passes from frontend to backend and it collects or stores
                data in the database maintaining the security, that is
                incredible. I love applying responsive web design principles and
                watching my web pages shrink into the mobile screen and still
                look amazing.
              </Typography>
              <br />
              <Typography component="p" gutterBottom>
                "Learn new things every day" is one of my mottos since my
                graduation. So I watched some TED talks about machine learning
                and took a course in Coursera and instantly fall in love with
                it. I download various data from Kaggle and apply different
                machine learning models to see what suits most. Some hands-on
                machine learning projects is added in the{" "}
                {
                  <Link style={{ color: "#66FCF1" }} to="/portfolio">
                    portfolio
                  </Link>
                }{" "}
                section
              </Typography>
              <br />
              <Typography component="p" gutterBottom>
                My specialties include quickly learning new skills and
                programming languages, problem-solving, responsive design
                principles. So far I have Python, C++, JavaScript, HTML(5),
                CSS(3), ReactJS, NodeJS, MongoDB, Machine Learning, Git/Github
                under my belt. I have started learning GatsbyJS and PyTorch.
              </Typography>
              <br />
              <Typography component="p" gutterBottom>
                Thanks for stopping by!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <MainFooter />
    </>
  );
};

export default About;
