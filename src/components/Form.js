import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: "", touched: false },
      email: { value: "", touched: false },
      subject: { value: "", touched: false },
      message: { value: "", touched: false }
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleSubjectInput = this.handleSubjectInput.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleNameInput(e) {
    this.setState({ name: { value: e.target.value, touched: true } });
  }
  handleEmailInput(e) {
    this.setState({ email: { value: e.target.value, touched: true } });
  }
  handleSubjectInput(e) {
    this.setState({ subject: { value: e.target.value, touched: true } });
  }
  handleMessageInput(e) {
    this.setState({ message: { value: e.target.value, touched: true } });
  }

  handleValidation(entry) {
    if (this.state[entry].touched) {
      if (this.state[entry].value.length > 5) {
        return {
          width: "100%",
          marginBottom: "1rem",
          padding: "1rem",
          outlineColor: "blue",
          borderColor: "blue"
        };
      } else {
        return {
          width: "100%",
          marginBottom: "1rem",
          padding: "1rem",
          outlineColor: "red",
          borderColor: "red"
        };
      }
    }
  }

  render() {
    return (
      <form
        style={{
          width: "30rem",
          margin: "auto",
          marginTop: "2rem"
        }}
        action="#"
        method="GET"
      >
        <h1>Questions?</h1>

        <input
          style={
            this.handleValidation("name") || {
              width: "100%",
              marginBottom: "1rem",
              padding: "1rem"
            }
          }
          value={this.state.name.value}
          onChange={this.handleNameInput}
          placeholder="Name"
          name="name"
          type="text"
          required
        />
        <br />

        <input
          style={
            this.handleValidation("email") || {
              width: "100%",
              marginBottom: "1rem",
              padding: "1rem"
            }
          }
          onChange={this.handleEmailInput}
          placeholder="Email"
          id="email"
          type="email"
          required
        />
        <br />

        <input
          style={
            this.handleValidation("subject") || {
              width: "100%",
              marginBottom: "1rem",
              padding: "1rem"
            }
          }
          onChange={this.handleSubjectInput}
          placeholder="Subject"
          name="subject"
          type="subject"
          required
        />
        <br />
        <textarea
          style={{
            width: "100%",
            height: "20rem"
          }}
          required
        />

        <br />
        <button
          style={{
            padding: "1rem",
            borderRadius: ".8rem",
            backgroundColor: "#ccc",
            outline: "none",
            display: "block",
            fontWeight: "bolder"
          }}
          type="submit"
        >
          Send Message
        </button>
      </form>
    );
  }
}

export default Form;
