import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./homepage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GetPeople from "./components/getpeoplenames.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/components/getpeoplenames"
            component={GetPeople}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
