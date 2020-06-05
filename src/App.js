import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Home from "./containers/Home/Home";
import Events from "./containers/Events/Events";
import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationItems />
        <Switch>
          <Route path="/blog" exact component={Blog} />
          <Route path="/events" exact component={Events} />
          <Route path="/" exact component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
