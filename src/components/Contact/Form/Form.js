import React, { Component } from "react";

import emailRegex from "./emailRegex";
import * as formStyles from "./formStyles";

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
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleInputValidation = this.handleInputValidation.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handleMessageValidation = this.handleMessageValidation.bind(this);
    this.nameInput = React.createRef();
  }

  componentDidMount() {
    this.nameInput.current.focus();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        touched: true,
        valid: e.target.value.trim().length > 5
      }
    });
  }

  handleEmailInput(e) {
    console.log(this.state);
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        touched: true,
        valid: emailRegex.test(e.target.value)
      }
    });
  }

  handleInputValidation(entry) {
    if (this.state[entry].touched) {
      if (this.state[entry].value.trim().length > 5) {
        return formStyles.validFormElStyle;
      } else {
        return formStyles.invalidFormElStyle;
      }
    }
  }

  handleEmailValidation() {
    if (this.state.email.touched) {
      if (emailRegex.test(this.state.email.value)) {
        return formStyles.validFormElStyle;
      } else {
        return formStyles.invalidFormElStyle;
      }
    }
  }

  handleMessageValidation() {
    if (this.state.message.touched) {
      if (this.state.message.value.trim().length > 5) {
        return formStyles.validMessageStyle;
      } else {
        return formStyles.invalidMessageStyle;
      }
    }
  }

  // Don't need to bind this since not referencing state

  handleButtonValidation({ name, email, subject, message }) {
    return message.valid && subject.valid && email.valid && name.valid;
  }

  render() {
    return (
      <form
        className="form"
        action="mailto:jalmeida0291@gmail.com"
        method="POST"
      >
        <h1 style={{ marginBottom: ".5rem" }}>Questions?</h1>

        <input
          style={this.handleInputValidation("name") || formStyles.formElStyle}
          value={this.state.name.value}
          onChange={this.handleInput}
          placeholder="Name"
          name="name"
          type="text"
          required
          ref={this.nameInput}
        />
        <br />

        <input
          style={this.handleEmailValidation() || formStyles.formElStyle}
          onChange={this.handleEmailInput}
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <br />

        <input
          style={
            this.handleInputValidation("subject") || formStyles.formElStyle
          }
          onChange={this.handleInput}
          placeholder="Subject"
          name="subject"
          type="subject"
          required
        />
        <br />
        <textarea
          style={this.handleMessageValidation() || formStyles.messageStyle}
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
              ? formStyles.buttonStyle
              : formStyles.disabledButtonStyle
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
