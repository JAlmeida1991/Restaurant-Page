import React, { Component } from "react";
import axios from "axios";

import Spinner from "../UI/Spinner";
import Review from "./Review/Review";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], loading: true };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data)
      .then(reviews => this.setState({ reviews, loading: false }))
      .catch(error => console.log(error));
  }
  render() {
    const randNum = Math.round(Math.random() * (this.state.reviews.length - 4));

    let reviews = this.state.reviews
      .map(review => (
        <Review key={review.id} title={review.title} body={review.body} />
      ))
      .slice(randNum, randNum + 4);

    return (
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Reviews</h1>
        {this.state.loading && <Spinner />}
        {reviews}
      </div>
    );
  }
}

export default Reviews;
