import React from "react";
import { Box, Avatar, Typography, Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { PhoneInTalk } from "@material-ui/icons";

import avatar from "./assets/profile.jpg";
import Typed from "react-typed";

//CSS
const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    height: theme.spacing(13),
    width: theme.spacing(13),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
  },
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const CustomTooltip = withStyles({
  tooltip: {
    color: "tomato",
    backgroundColor: "rgb(0,0,0,0)",
    fontWeight: "bold",
    fontSize: "12px",
  },
})(Tooltip);

//JSX
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <CustomTooltip
        title={
          <>
            <p style={{ paddingLeft: "15px" }}>Let's talk</p>
            <PhoneInTalk />
          </>
        }
        placement="top-end"
        arrow
      >
        <Avatar className={classes.avatar} src={avatar} alt="Ibrahim Kaiser" />
      </CustomTooltip>
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Ibrahim Kaiser"]} typeSpeed={40} />
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        <br />
        <Typed
          strings={[
            "Civil Engineering",
            "Web Development",
            "Web Design",
            "Machine Learning",
          ]}
          typeSpeed={30}
          backSpeed={40}
          loop
        ></Typed>
      </Typography>
    </Box>
  );
};

export default Header;
