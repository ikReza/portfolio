import React, { useState } from "react";
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
} from "@material-ui/icons";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  typo: {
    color: "white",
    "&:hover": {
      color: "red",
      cursor: "default",
    },
  },
  menuSliderContainer: {
    height: "100%",
    width: "100%",
    background: "#511",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    height: theme.spacing(13),
    width: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  // const [state, setState] = useState({
  //   right: false,
  // });
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
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={item.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const toggleSlider = (slider, open) => () => {
  //   setState({ ...state, [slider]: open });
  // };

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            {/* <IconButton onClick={toggleSlider("right", true)}> */}
            <IconButton onClick={() => setIsOpen(true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography className={classes.typo}>Hello!</Typography>
            <Drawer
              anchor="right"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            >
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
