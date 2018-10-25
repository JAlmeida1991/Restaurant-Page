import React, { Component } from "react";

const formElStyle = {
  width: "100%",
  marginBottom: "1rem",
  padding: "1rem"
};

const messageStyle = {
  width: "100%",
  height: "20rem",
  padding: "1rem"
};

const buttonStyle = {
  padding: "1rem",
  borderRadius: ".8rem",
  backgroundColor: "#ccc",
  outline: "none",
  display: "block",
  fontWeight: "bolder",
  marginTop: ".5rem",
  backgroundColor: "green",
  color: "white",
  cursor: "pointer"
};

const disabledButtonStyle = Object.assign({}, buttonStyle);
disabledButtonStyle.backgroundColor = "silver";
disabledButtonStyle.cursor = "not-allowed";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: "", touched: false, valid: false },
      email: { value: "", touched: false, valid: false },
      subject: { value: "", touched: false, valid: false },
      message: { value: "", touched: false, valid: false }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleInputValidation = this.handleInputValidation.bind(this);
    this.handleMessageValidation = this.handleMessageValidation.bind(this);
  }

  handleInput(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        touched: true,
        valid: e.target.value.trim().length > 5
      }
    });
  }

  handleInputValidation(entry) {
    if (this.state[entry].touched) {
      if (this.state[entry].value.trim().length > 5) {
        const newFormElStyle = Object.assign({}, formElStyle);
        newFormElStyle.outlineColor = "blue";
        newFormElStyle.backgroundColor = "deepskyblue";
        newFormElStyle.borderColor = "blue";
        return newFormElStyle;
      } else {
        const newFormElStyle = Object.assign({}, formElStyle);
        newFormElStyle.outlineColor = "red";
        newFormElStyle.backgroundColor = "LightCoral";
        newFormElStyle.borderColor = "red";
        return newFormElStyle;
      }
    }
  }

  handleMessageValidation() {
    if (this.state.message.touched) {
      if (this.state.message.value.trim().length > 5) {
        const newFormElStyle = Object.assign({}, messageStyle);
        newFormElStyle.outlineColor = "blue";
        newFormElStyle.backgroundColor = "deepskyblue";
        newFormElStyle.borderColor = "blue";
        return newFormElStyle;
      } else {
        const newFormElStyle = Object.assign({}, messageStyle);
        newFormElStyle.outlineColor = "red";
        newFormElStyle.backgroundColor = "LightCoral";
        newFormElStyle.borderColor = "red";
        return newFormElStyle;
      }
    }
  }

  handleButtonValidation({ name, email, subject, message }) {
    return message.valid && subject.valid && email.valid && name.valid;
  }

  render() {
    return (
      <form
        style={{
          width: "30rem",
          margin: "auto",
          marginTop: "2rem"
        }}
        action="mailto:jalmeida0291@gmail.com"
        method="POST"
      >
        <h1 style={{ marginBottom: ".5rem" }}>Questions?</h1>

        <input
          style={this.handleInputValidation("name", 3) || formElStyle}
          value={this.state.name.value}
          onChange={this.handleInput}
          placeholder="Name"
          name="name"
          type="text"
          required
        />
        <br />

        <input
          style={this.handleInputValidation("email", 5) || formElStyle}
          onChange={this.handleInput}
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <br />

        <input
          style={this.handleInputValidation("subject", 5) || formElStyle}
          onChange={this.handleInput}
          placeholder="Subject"
          name="subject"
          type="subject"
          required
        />
        <br />
        <textarea
          style={this.handleMessageValidation(5) || messageStyle}
          onChange={this.handleInput}
          value={this.state.message.value}
          placeholder="Message"
          required
          name="message"
        />

        <br />
        <button
          style={
            this.handleButtonValidation(this.state)
              ? buttonStyle
              : disabledButtonStyle
          }
          type="submit"
          disabled={!this.handleButtonValidation(this.state)}
        >
          Send Question
        </button>
      </form>
    );
  }
}

export default Form;
