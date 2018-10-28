import React from "react";
import Form from "./Form/Form";

const Contact = ({ contact }) => {
  const { phone, address } = contact;
  const { city, state, street, zip } = address;
  return (
    <div className="contact">
      <div>
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
    </div>
  );
};

export default Contact;
