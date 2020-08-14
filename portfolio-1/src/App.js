import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-171805874-1");
    //to report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
    return () => {};
  }, []);

  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
