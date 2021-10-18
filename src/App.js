import React from "react";
import "./global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </Router>
  );
}

export default App;
