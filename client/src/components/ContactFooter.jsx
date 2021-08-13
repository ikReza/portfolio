import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    overflow: "hidden",
    width: "100%",
    height: "5vh",
    background: "transparent",
    display: "flex",
    justifyContent: "center", //horizontal
    alignItems: "center", //vertical
  },
}));

const ContactFooter = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Typography variant="subtitle2" style={{ color: "whitesmoke" }}>
        Ibrahim Kaiser © 2020-2021
      </Typography>
    </Box>
  );
};

export default ContactFooter;
