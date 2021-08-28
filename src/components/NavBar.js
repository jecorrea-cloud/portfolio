import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/"><h1>Joaquin Correa</h1></NavLink>
        <h4>Full stack software engineer specialized on front end development and with a passion to help others.</h4> <NavLink to="/">Projects</NavLink> <NavLink to="/about">About</NavLink>
      </div>
    );
  }
}

export default withRouter(NavBar);