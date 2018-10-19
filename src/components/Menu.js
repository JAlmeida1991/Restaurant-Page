import React from "react";

const menu = props => {
  console.log(props);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1rem"
        }}
      >
        Menu
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "1rem"
        }}
      >
        We sell the best pizza in town!
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gridGap: "10px"
        }}
      >
        {props.pizzas.map((pizza, index) => (
          <div
            style={{
              display: "inline-block"
            }}
            key={pizza}
          >
            <h2
              style={{
                textAlign: "center"
              }}
            >
              Pizza {index + 1}
            </h2>
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
