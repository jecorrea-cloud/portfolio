// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import About from "./components/About"
import { Switch, Route, Router, withRouter, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Switch>
          <Route path="/about" exact component={About}></Route>
          <Route path="/" exact component={Projects} />
      </Switch>
      </div>
    )
  }
}

export default withRouter(App);

