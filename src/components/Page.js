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
      pizzas: [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]
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
            justifyContent: "space-around",
            listStyle: "none",
            backgroundColor: "orange",
            padding: "10px"
          }}
        >
          <li>
            <NavLink exact activeStyle={{ color: "red" }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/contact">
              Conact
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route
            path="/menu"
            render={props => <Menu {...props} pizzas={this.state.pizzas} />}
          />
          <Route path="/contact" />
          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default Page;
