import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Menu,
  Home,
  AssignmentInd,
  Apps,
  ContactMail,
  AccountCircle,
  Facebook,
  Instagram,
  YouTube,
  LinkedIn,
} from "@material-ui/icons";
import avatar from "../profile.jpg";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  typo: {
    flexGrow: 1.5,
    color: "white",
    "&:hover": {
      cursor: "default",
    },
  },
  arrowIcon: {
    color: "tomato",
    "&:active": {
      color: "#66FCF1",
    },
  },
  menuSliderContainer: {
    height: "100%",
    width: "100%",
    background: "#1F2833",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    height: theme.spacing(13),
    width: theme.spacing(13),
  },
  listItem1: {
    color: "tan",
  },
  listItem2: {
    color: "tan",
    "&:hover": {
      color: "tomato",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopView: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  desktopButton: {
    flexGrow: 1.5,
    color: "tomato",
    background: "#1F2833",
    margin: "auto 1vw",
    "&:hover": {
      background: "#233",
      filter: "brightness(200%)",
    },
  },
  btn: {
    flexGrow: 0.7,
    background: "white",
    margin: "auto 0.5vw",
    padding: theme.spacing(0.5),
    display: "inline-block",
    "&:hover": {
      background: "#d2d9d3",
    },
  },
}));

//links
const fb = "https://www.facebook.com/kaiser.ireza";
const yt = "https://www.youtube.com/channel/UCoDVvnIbgHH7oZS67iLiEfg";
const ig = "https://www.instagram.com/kaiser_reza";
const ln = "https://www.linkedin.com/in/ibrahim-kaiser/";

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    link: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    link: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    link: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    link: "/contact",
  },
  {
    listIcon: <AccountCircle />,
    listText: "About Me",
    link: "/about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const sideList = () => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={() => setIsOpen(false)}
    >
      <Avatar src={avatar} alt="Ibrahim Kaiser" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.link}>
            <ListItemIcon className={classes.listItem1}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={item.listText}
              className={classes.listItem2}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#0B0C10" }}>
          <Toolbar style={{ display: "flex" }}>
            <IconButton
              onClick={() => setIsOpen(true)}
              className={classes.menuButton}
            >
              <Menu className={classes.arrowIcon} />
            </IconButton>
            <Typography className={classes.typo}>Ibrahim Kaiser</Typography>
            <List className={classes.desktopView}>
              {menuItems.map((item, key) => (
                <Button
                  component={Link}
                  to={item.link}
                  key={key}
                  variant="contained"
                  size="small"
                  className={classes.desktopButton}
                >
                  {item.listText}
                </Button>
              ))}
            </List>
            <List className={classes.desktopView}>
              <IconButton
                className={classes.btn}
                onClick={() => window.open(fb)}
                style={{ marginLeft: "10vw" }}
              >
                <Facebook size="small" style={{ color: "#3b5998" }} />
              </IconButton>
              <IconButton
                className={classes.btn}
                onClick={() => window.open(ln)}
              >
                <LinkedIn style={{ color: "#0e76a8" }} />
              </IconButton>
              <IconButton
                className={classes.btn}
                onClick={() => window.open(ig)}
              >
                <Instagram style={{ color: "#3f729b" }} />
              </IconButton>
              <IconButton
                className={classes.btn}
                onClick={() => window.open(yt)}
              >
                <YouTube style={{ color: "#c4302b" }} />
              </IconButton>
            </List>
            <Drawer
              anchor="right"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            >
              {sideList()}
              <Footer />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
