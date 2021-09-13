import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/" className="inactive" activeClassName="active"><h1>Joaquin Correa</h1></NavLink>
        <h4>Full stack software engineer specialized on front-end development</h4> <NavLink to="/" >Projects</NavLink> <NavLink to="/about" className="inactive" activeClassName="active">About</NavLink>
      </div>
    );
  }
}

export default withRouter(NavBar);