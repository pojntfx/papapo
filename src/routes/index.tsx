import * as React from "react";
import { Fragment } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { UploadVideo } from "./UploadVideo";

const Routes = props => (
  <Router {...props}>
    <Fragment>
      <Route
        exact
        path="/"
        render={props => <Redirect to="/videos" {...props} />}
      />
      <Route path="/videos" component={Home} />
      <Route path="/upload/video" component={UploadVideo} />
    </Fragment>
  </Router>
);

export { Routes };
