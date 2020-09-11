import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

import "./topicHeader.scss";

const TopicHeader = ({ children }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={8} sm={5} md={4}>
        <Box className="topic-box">
          <Typography className="topic-text">{children}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopicHeader;
