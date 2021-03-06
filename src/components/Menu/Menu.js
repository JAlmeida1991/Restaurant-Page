import React, { Component } from "react";

import Modal from "../UI/Modal";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, index: null };
    this.showModalHandler = this.showModalHandler.bind(this);
    this.removeModalHandler = this.removeModalHandler.bind(this);
  }

  formatPizzaIndex(index) {
    if (index + 1 == 1) {
      return <sup>st </sup>;
    } else if (index + 1 == 2) {
      return <sup>nd </sup>;
    } else {
      return <sup>th </sup>;
    }
  }

  showModalHandler(index) {
    if (!this.state.showModal) {
      this.setState({ showModal: true, index: index });
    }
  }

  removeModalHandler() {
    if (this.state.showModal) {
      this.setState({ showModal: false });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="menu-title">Menu</h1>
        <p className="menu-intro">We sell the best pizza in town!</p>
        <div className="menu-pizza-container">
          {this.props.pizzas.map((pizza, index) => (
            <div key={pizza} className="pizza-box">
              <h2 style={{ textAlign: "center" }}>
                {index + 1}
                {this.formatPizzaIndex(index)}
                Pizza
              </h2>
              <img
                src={pizza}
                style={{ width: "100%", cursor: "pointer", display: "block" }}
                onClick={() => this.showModalHandler(index)}
              />
            </div>
          ))}
        </div>
        {this.state.showModal && (
          <Modal
            pizza={this.props.pizzas}
            index={this.state.index}
            removeModal={this.removeModalHandler}
            alt="pizza"
            src={this.props.pizzas[this.state.index]}
            description={`Every pizza we make use only fresh ingredients. Total Price for this pizza is:
       $${Math.floor(Math.random() * (12 - 8) + 8).toFixed(2)}`}
          />
        )}
      </div>
    );
  }
}

export default Menu;
