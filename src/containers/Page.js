import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/Error/Error";
import Footer from "../components/Footer/Footer";
import Reviews from "../components/Reviews/Reviews";

import pizza1 from "../images/pizza1.jpg";
import pizza2 from "../images/pizza2.jpg";
import pizza3 from "../images/pizza3.jpg";
import pizza4 from "../images/pizza4.jpg";
import pizza5 from "../images/pizza5.jpg";
import pizza6 from "../images/pizza6.jpg";
import pizza7 from "../images/pizza7.jpg";
import pizza8 from "../images/pizza8.jpg";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John's One Stop Pizza Place",
      pizzas: [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8],
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
          <Route exact path="/reviews" component={Reviews} />
          <Route
            path="/"
            exact
            render={props => <Home {...props} name={this.state.name} />}
          />
          <Route component={ErrorPage} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}

export default Page;
