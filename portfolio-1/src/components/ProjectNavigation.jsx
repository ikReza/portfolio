import React from "react";
import { Breadcrumbs, Link, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  stickyApp: {
    display: "flex",
    alignItems: "center",
    justifyConte: "center",
    backgroundColor: "gray",
  },
}));

const ProjectNavigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.stickyApp}>
      <Toolbar variant="dense">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href="#machine-learning"
            onClick={(e) => e.preventDefault}
          >
            Machine Learning
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href="#fullstack"
            onClick={(e) => e.preventDefault}
          >
            Full Stack
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href="#frontend"
            onClick={(e) => e.preventDefault}
          >
            Frontend
          </Link>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default ProjectNavigation;
