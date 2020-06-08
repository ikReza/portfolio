import React from "react";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    color: "tomato",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        This page is not finished yet.
      </Box>
    </>
  );
};

export default Resume;
