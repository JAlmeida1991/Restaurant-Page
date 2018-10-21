import React, { Component } from "react";

import Modal from "./Modal";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, index: null };
    this.showModalHandler = this.showModalHandler.bind(this);
    this.removeModalHandler = this.removeModalHandler.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  formatPizza(index) {
    return (
      <sup>
        {index + 1 == 1
          ? "st"
          : index + 1 == 2
            ? "nd"
            : index + 1 == 3
              ? "rd"
              : "th"}{" "}
      </sup>
    );
  }

  showModalHandler(index) {
    if (!this.state.showModal) {
      console.log(index);
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
      <div
        style={{
          width: "95%",
          margin: "auto"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "2rem"
          }}
        >
          Menu
        </h1>
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem"
          }}
        >
          We sell the best pizza in town!
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gridGap: "1.5rem",
            marginTop: "1.5rem"
          }}
        >
          {this.props.pizzas.map((pizza, index) => (
            <div key={pizza}>
              <h2
                style={{
                  textAlign: "center"
                }}
              >
                {index + 1}
                {this.formatPizza(index)}
                Pizza
              </h2>
              <img
                src={pizza}
                style={{
                  width: "100%",
                  cursor: "pointer"
                }}
                onClick={() => this.showModalHandler(index)}
              />
            </div>
          ))}
        </div>
        {this.state.showModal ? (
          <Modal
            pizza={this.props.pizzas}
            index={this.state.index}
            removeModal={this.removeModalHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default Menu;
