import React from "react";
import Form from "./Form";

const contact = ({ contact }) => {
  const { phone, address } = contact;
  const { city, state, street, zip } = address;
  return (
    <div className="contact">
      <br />
      <Form />
      <br />
      <address>
        We are located at:
        <br />
        {street}
        <br />
        {`${city}, ${state}, ${zip}`}
        <p>
          <br />
          Our phone number is:
        </p>
        Phone: {phone}
      </address>
    </div>
  );
};

export default contact;
