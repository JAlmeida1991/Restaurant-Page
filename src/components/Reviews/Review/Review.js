import React from "react";

const Review = props => (
  <div
    style={{
      padding: "3rem",
      margin: "1rem auto",
      border: "1px solid black",
      boxShadow: "0 .2rem .2rem rgba(0, 0, 0, .4)",
      width: "80%",
      border: ".5rem solid #f39c12",
      borderRadius: "2rem"
    }}
  >
    <h2 style={{ textTransform: "uppercase" }}>{props.title}</h2>
    <p>{props.body}</p>
  </div>
);

export default Review;
