import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => (
  <nav className="nav">
    <ul className="nav-list">
      <li>
        <NavLink
          exact
          style={{ color: "blue" }}
          activeStyle={{ color: "red", fontWeight: "bold" }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={{ color: "blue" }}
          activeStyle={{ color: "red", fontWeight: "bold" }}
          to="/menu"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          style={{ color: "blue" }}
          activeStyle={{ color: "red", fontWeight: "bold" }}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

/* <li>
        <NavLink
          style={{ color: "blue" }}
          activeStyle={{ color: "red", fontWeight: "bold" }}
          to="/reviews"
        >
          Reviews
        </NavLink>
</li> */

export default Navbar;
