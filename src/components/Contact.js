import React from "react";
import Form from "./Form";

const contact = ({ contact }) => {
  const { phone, address } = contact;
  const { city, state, street, zip } = address;
  return (
    <div className="contact">
      <br />

      <address className="contact-address">
        Contact us at:
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
      <Form />
    </div>
  );
};

export default contact;
