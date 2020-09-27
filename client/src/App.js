import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Loading from "./components/loading/Loading";

import ReactGA from "react-ga";

import "./App.css";
import { CssBaseline } from "@material-ui/core";

const Home = lazy(() => import("./components/Home"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Blog = lazy(() => import("./components/blog/blog"));

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
        <Suspense fallback={<Loading />}>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
