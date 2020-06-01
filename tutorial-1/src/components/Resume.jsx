import React from "react";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";

const Resume = () => {
  return (
    <>
      <Navbar />
      <Box component="header">
        <Typography variant="h4" align="center">
          Resume
        </Typography>
        <Box component="div">
          <Typography variant="h2">2013</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
