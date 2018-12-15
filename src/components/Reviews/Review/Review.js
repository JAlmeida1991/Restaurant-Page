import React from "react";

const Review = props => (
  <div className="review">
    <h2 style={{ textTransform: "uppercase" }}>{props.title}</h2>
    <p>{props.body}</p>
  </div>
);

export default Review;
