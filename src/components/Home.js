import React, { Fragment } from "react";

const Home = props => (
  <Fragment>
    <div className="home">
      {Array(15)
        .fill(null)
        .map((el, i) => (
          <div key={i} className={`pepperoni-${i + 1}`} />
        ))}

      <h1 className="home-title">John's One Stop Pizza Place</h1>
      <p className="home-description">
        We use the freshest ingredients to make our Pizza!
      </p>
    </div>
  </Fragment>
);

export default Home;
