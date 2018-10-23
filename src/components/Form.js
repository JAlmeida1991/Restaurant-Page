import React from "react";

const form = props => {
  return (
    <form action="mailto:jalmeida0291@gmail.com">
      <h1>Email:</h1>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" required />
      <br />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <br />
      <label htmlFor="subject">Subject</label>
      <input id="subject" name="subject" type="subject" required />
      <br />
      <textarea required />

      <br />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default form;
