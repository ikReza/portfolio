import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    overflow: "hidden",
    width: "100%",
    height: "5vh",
    background: "transparent",
    display: "flex",
    justifyContent: "center", //horizontal
    alignItems: "center", //vertical
  },
}));

const MainFooter = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Typography variant="subtitle2" style={{ color: "whitesmoke" }}>
        Copyright © 2020 Ibrahim Kaiser
      </Typography>
    </Box>
  );
};

export default MainFooter;
