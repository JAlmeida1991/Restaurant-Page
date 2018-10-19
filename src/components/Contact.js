import React from "react";

const contact = ({ contact }) => {
  const { phone, address } = contact;
  const { city, state, street, zip } = address;
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(75vh - 37px)"
      }}
    >
      <h1
        style={{
          textAlign: "center"
        }}
      >
        Contact:
      </h1>
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem"
        }}
      >
        We are located in:
      </p>
      <address
        style={{
          textAlign: "center",
          fontSize: "2rem"
        }}
      >
        {street}
        <br />
        {`${city}, ${state}, ${zip}`}
        <p
          style={{
            textAlign: "center",
            fontSize: "2rem"
          }}
        >
          <br />
          Our phone number is:
        </p>
        Phone: {phone}
      </address>
    </div>
  );
};

export default contact;
