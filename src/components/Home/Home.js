import React from "react";

const Home = props => (
  <div className="home">
    {Array(15)
      .fill(null)
      .map((el, i) => (
        <div key={i} className={`pepperoni-${i + 1}`} />
      ))}

    <h1 className="home-title">{props.name}</h1>
    <p className="home-description">
      We use the freshest ingredients to make our Pizza!
    </p>
  </div>
);

export default Home;
