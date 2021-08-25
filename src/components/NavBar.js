import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    );
  }
}

export default withRouter(Navbar);