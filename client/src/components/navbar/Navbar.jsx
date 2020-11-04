import React, { useState } from "react";
import ReactGA from "react-ga";
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
import {
  Menu,
  Facebook,
  Instagram,
  YouTube,
  LinkedIn,
} from "@material-ui/icons";
import Footer from "../Footer";
import avatar from "../assets/profile.jpg";

import { menuItems } from "./menuItems";

import "./navbar.scss";

//links
const fb = "https://www.facebook.com/kaiser.ireza";
const yt = "https://www.youtube.com/channel/UCoDVvnIbgHH7oZS67iLiEfg";
const ig = "https://www.instagram.com/kaiser_reza";
const ln = "https://www.linkedin.com/in/ibrahim-kaiser/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const googleAnalyticsMobile = () => {
    ReactGA.event({
      category: "Mobile User",
      action: "Clicked the button from sidebar",
    });
  };

  const googleAnalyticsDesktop = () => {
    ReactGA.event({
      category: "Desktop User",
      action: "Clicked the button from Navbar",
    });
  };

  const sideList = () => (
    <Box
      component="div"
      className="menuSliderContainer"
      onClick={() => setIsOpen(false)}
    >
      <Avatar src={avatar} alt="Ibrahim Kaiser" className="avatar" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem
            button
            key={key}
            component={Link}
            to={item.link}
            onClick={googleAnalyticsMobile}
          >
            <ListItemIcon className="list-item1">{item.listIcon}</ListItemIcon>
            <ListItemText primary={item.listText} className="list-item2" />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <AppBar position="static" style={{ background: "#0B0C10" }}>
        <Toolbar style={{ display: "flex" }}>
          <div className="nav-menu">
            <IconButton
              onClick={() => setIsOpen(true)}
              className="nav-menuButton"
            >
              <Menu className="nav-burgerIcon" />
            </IconButton>
            <Typography component={Link} to="/" className="nav-typo">
              Ibrahim Kaiser
            </Typography>
          </div>
          <List className="nav-desktopView">
            {menuItems.map((item, key) => (
              <Button
                component={Link}
                to={item.link}
                key={key}
                variant="contained"
                size="small"
                className="nav-desktopButton"
                onClick={googleAnalyticsDesktop}
              >
                {item.listText}
              </Button>
            ))}
          </List>
          <List className="nav-desktopView" style={{ flexGrow: 1 }}>
            <IconButton
              className="nav-socialButton"
              onClick={() => window.open(fb)}
            >
              <Facebook size="small" style={{ color: "#3b5998" }} />
            </IconButton>
            <IconButton
              className="nav-socialButton"
              onClick={() => window.open(ln)}
            >
              <LinkedIn style={{ color: "#0e76a8" }} />
            </IconButton>
            <IconButton
              className="nav-instaButton"
              onClick={() => window.open(ig)}
            >
              <Instagram style={{ color: "white" }} />
            </IconButton>
            <IconButton
              className="nav-socialButton"
              onClick={() => window.open(yt)}
            >
              <YouTube style={{ color: "#c4302b" }} />
            </IconButton>
          </List>
          <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
            {sideList()}
            <Footer />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
