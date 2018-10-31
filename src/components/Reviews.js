import React, { Component } from "react";
import Spinner from "./Spinner";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], loading: true };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(reviews => this.setState({ reviews, loading: false }))
      .catch(error => console.log(error));
  }
  render() {
    const randNum = Math.round(Math.random() * (this.state.reviews.length - 4));

    let reviews = this.state.reviews
      .map(review => (
        <div
          key={review.id}
          style={{
            padding: "3rem",
            margin: "1rem auto",
            border: "1px solid black",
            boxShadow: "0 .2rem .2rem rgba(0, 0, 0, .4)",
            width: "80%"
          }}
        >
          <h2>{review.title}</h2>
          <p>{review.body}</p>
        </div>
      ))
      .slice(randNum, randNum + 4);
    return (
      <div className="reviews">
        <h1 style={{ textAlign: "center", margin: "2rem" }}>Reviews</h1>
        {this.state.loading && <Spinner />}
        {reviews}
      </div>
    );
  }
}

export default Reviews;
