import React from "react";

const menu = props => {
  console.log(props);
  return (
    <div
      style={{
        width: "95%",
        margin: "auto"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem"
        }}
      >
        Menu
      </h1>
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem"
        }}
      >
        We sell the best pizza in town!
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gridGap: "1.5rem",
          marginTop: "1.5rem"
        }}
      >
        {props.pizzas.map((pizza, index) => (
          <div key={pizza}>
            <h2
              style={{
                textAlign: "center"
              }}
            >
              {index + 1 == 1
                ? index + 1 + "st"
                : index + 1 == 2
                  ? index + 1 + "nd"
                  : index + 1 == 3
                    ? index + 1 + "rd"
                    : index + 1 + "th"}{" "}
              Pizza
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
