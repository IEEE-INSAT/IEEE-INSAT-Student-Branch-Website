import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation/Navigation";
import Activities from "./pages/Activities";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Chapters from "./pages/Chapters";
import Awards from "./components/Awards/Awards";

const renderNavigation = () => {
  if (
    !(
      window.location.pathname === "/login" ||
      window.location.pathname === "/signup" ||
      window.location.pathname === "/coming-soon" ||
      window.location.pathname === "/error-404"
    )
  ) {
    return <Navigation />;
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
