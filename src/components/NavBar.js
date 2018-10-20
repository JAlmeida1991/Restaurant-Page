import React from "react";
import { NavLink } from "react-router-dom";

const navbar = props => (
  <ul
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      listStyle: "none",
      backgroundColor: "#f39c12",
      padding: "1rem",
      position: "relative",
      zIndex: 9999
    }}
  >
    <li>
      <NavLink
        exact
        style={{ color: "blue" }}
        activeStyle={{
          color: "red",
          fontWeight: "bold"
        }}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        style={{ color: "blue" }}
        activeStyle={{
          color: "red",
          fontWeight: "bold"
        }}
        to="/menu"
      >
        Menu
      </NavLink>
    </li>
    <li>
      <NavLink
        style={{ color: "blue" }}
        activeStyle={{
          color: "red",
          fontWeight: "bold"
        }}
        to="/contact"
      >
        Contact
      </NavLink>
    </li>
  </ul>
);

export default navbar;
