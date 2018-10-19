import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";

import pizza1 from "../images/pizza1.jpg";
import pizza2 from "../images/pizza2.jpg";
import pizza3 from "../images/pizza3.jpg";
import pizza4 from "../images/pizza4.jpg";
import pizza5 from "../images/pizza5.jpg";
import pizza6 from "../images/pizza6.jpg";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6],
      contact: {
        address: {
          street: "101 Main Street",
          city: "New York",
          state: "NY",
          zip: "10101"
        },
        phone: "1-800-800-8000"
      }
    };
  }
  componentDidMount() {
    // console.log(this.state.pizzas);
  }

  render() {
    return (
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
            backgroundColor: "orange",
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
                color: "crimson"
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "blue" }}
              activeStyle={{ color: "crimson" }}
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "blue" }}
              activeStyle={{ color: "crimson" }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route
            path="/menu"
            render={props => <Menu {...props} pizzas={this.state.pizzas} />}
          />
          <Route
            path="/contact"
            render={props => (
              <Contact {...props} contact={this.state.contact} />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Page;
