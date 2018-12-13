import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/Loading";
import * as routes from "../routes";

const HomePage = Loadable({
  loading: Loading,
  loader: () => import("../pages/Home/index.home")
});

class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME} component={() => <HomePage />} />
        </Switch>
      </Router>
    );
  }
}
export default MainRouter;
