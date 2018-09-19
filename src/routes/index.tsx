import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home";

const Routes = props => (
  <Router {...props}>
    <Route exact path="/" component={Home} />
  </Router>
);

export { Routes };