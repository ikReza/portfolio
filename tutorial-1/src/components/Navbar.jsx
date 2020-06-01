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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ArrowBack,
  Home,
  AssignmentInd,
  Apps,
  ContactMail,
  AccountCircle,
} from "@material-ui/icons";
import avatar from "../profile.jpg";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  typo: {
    color: "white",
    "&:hover": {
      color: "red",
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
}));

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
          <Toolbar>
            <IconButton onClick={() => setIsOpen(true)}>
              <ArrowBack className={classes.arrowIcon} />
            </IconButton>
            <Typography className={classes.typo}>Hello!</Typography>
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
