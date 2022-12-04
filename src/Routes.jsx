import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Awards from "./components/Awards/Awards";
import Navbar from "./components/Navigation/Navbar";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Chapters from "./pages/Chapters";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const renderNavigation = () => {
  if (
    !(
      window.location.pathname === "/login" ||
      window.location.pathname === "/signup" ||
      window.location.pathname === "/coming-soon" ||
      window.location.pathname === "/error-404"
    )
  ) {
    return <Navbar />;
  }
};

const AppRouter = () => {
  return (
    <Router>
      {renderNavigation()}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/chapters" exact component={Chapters} />
        <Route path="/activities" exact component={Activities} />
        <Route path="/awards" exact component={Awards} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/error-404" exact component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
