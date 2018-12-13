import React from "react";
import Form from "./Form/Form";

const Contact = ({ contact }) => {
  const { phone, address } = contact;
  const { city, state, street, zip } = address;
  return (
    <div className="container">
      <div>
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Questions?</h1>
        <br />
        <Form />
        <br />
        <address
          style={{
            width: "30rem",
            margin: "0 auto",
            fontSize: "1.3rem"
          }}
        >
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
