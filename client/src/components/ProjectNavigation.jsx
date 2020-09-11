import React from "react";
import { Breadcrumbs, Link, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  stickyApp: {
    display: "flex",
    alignItems: "center",
    justifyConte: "center",
    backgroundColor: "#272727",
  },
}));

const ProjectNavigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.stickyApp}>
      <Toolbar variant="dense">
        <Breadcrumbs aria-label="breadcrumb" separator="">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="#machine-learning"
            onClick={(e) => e.preventDefault}
          >
            Machine Learning{" "}
            <span style={{ color: "tomato", marginLeft: "2px" }}>/</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="#fullstack"
            onClick={(e) => e.preventDefault}
          >
            Full Stack{" "}
            <span style={{ color: "tomato", marginLeft: "2px" }}>/</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
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
