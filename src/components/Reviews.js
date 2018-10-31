import React, { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(reviews => this.setState({ reviews }))
      .catch(error => console.log(error));
  }
  render() {
    const randNum = Math.round(Math.random() * this.state.reviews.length);

    let reviews = this.state.reviews
      .map(review => (
        <div
          key={review.id}
          style={{
            padding: "3rem",
            margin: "1rem",
            border: "1px solid black",
            boxShadow: "0 .2rem .2rem rgba(0, 0, 0, .4)"
          }}
        >
          <h2>{review.title}</h2>
          <p>{review.body}</p>
        </div>
      ))
      .splice(randNum);
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "2rem" }}>Reviews</h1>
        {reviews}
      </div>
    );
  }
}

export default Reviews;
