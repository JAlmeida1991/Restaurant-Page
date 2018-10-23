import React from "react";
import Form from "./Form";

const contact = ({ contact }) => {
  const { phone, address } = contact;
  const { city, state, street, zip } = address;
  return (
    <div className="contact">
      <h1 className="contact-title">Contact:</h1>
      <br />
      <p className="contact-intro">We are located in:</p>
      <address className="contact-address">
        {street}
        <br />
        {`${city}, ${state}, ${zip}`}
        <p>
          <br />
          Our phone number is:
        </p>
        Phone: {phone}
      </address>
      <Form />
    </div>
  );
};

export default contact;
