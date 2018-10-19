import React from "react";

const menu = props => {
  console.log(props);
  return (
    <div>
      <h1>Jonathan's Pizza Place</h1>
      <p>We Sell the best pizza in town</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gridGap: "10px"
        }}
      >
        {props.pizzas.map(pizza => (
          <div
            style={{
              display: "inline-block"
            }}
            key={pizza}
          >
            <img
              src={pizza}
              style={{
                width: "100%"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default menu;
