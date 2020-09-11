import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/blog";

import ReactGA from "react-ga";

import "./App.css";
import { CssBaseline } from "@material-ui/core";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-171805874-1");
    //to report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
    return () => {};
  }, []);

  return (
    <Router>
      <Navbar />
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
