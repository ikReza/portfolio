import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

//links
const fb = "https://www.facebook.com/kaiser.ireza";
const yt = "https://www.youtube.com/channel/UCoDVvnIbgHH7oZS67iLiEfg";
const ig = "https://www.instagram.com/kaiser_reza";

//CSS
const useStyles = makeStyles(() => ({
  btmNavigation: {
    width: "auto",
    background: "#0B0C10",
  },
  icon: {
    color: "tan",
    "&:hover": {
      color: "#66FCF1",
    },
    "&:active": {
      color: "tomato",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.btmNavigation}>
      <BottomNavigationAction
        icon={<Facebook className={classes.icon} />}
        onClick={() => window.open(fb)}
      />
      <BottomNavigationAction
        icon={<Instagram className={classes.icon} />}
        onClick={() => window.open(ig)}
      />
      <BottomNavigationAction
        icon={<YouTube className={classes.icon} />}
        onClick={() => window.open(yt)}
      />
    </BottomNavigation>
  );
};

export default Footer;
