import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import Error_Page from "./Error";

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
        <NavBar />
        <Switch>
          <Route
            exact
            path="/menu"
            render={props => <Menu {...props} pizzas={this.state.pizzas} />}
          />

          <Route
            exact
            path="/contact"
            render={props => (
              <Contact {...props} contact={this.state.contact} />
            )}
          />

          <Route path="/" exact component={Home} />

          <Route component={Error_Page} />
        </Switch>
      </div>
    );
  }
}

export default Page;
