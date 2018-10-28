import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import Home from "../components/Home";
import Contact from "../components/Contact";
import ErrorPage from "../components/Error";
import Footer from "../components/Footer";

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
          street: `${Math.round(Math.random() * 300)} Main Street`,
          city: "New York",
          state: "NY",
          zip: "10101"
        },
        phone: `1-800-800-8000`
      }
    };
  }

  render() {
    return (
      <Fragment>
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
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Page;
