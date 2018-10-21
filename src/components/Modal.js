import React from "react";

const modal = props => {
  console.log(props);
  return (
    <div
      onClick={props.removeModal}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column nowrap"
      }}
    >
      <img
        onClick={e => e.stopPropagation()}
        width="50%"
        height="auto"
        src={props.pizza[props.index]}
      />
      <p
        onClick={e => e.stopPropagation()}
        style={{
          marginTop: "1rem",
          color: "white",
          fontWeight: "bold",
          width: "50%"
        }}
      >
        All our pizzas are made with the freshest ingredients. We pride our
        selves to only serve organic ingredients only! Total Price for this
        pizza is:
        {" $" + Math.floor(Math.random() * (12 - 8) + 8).toFixed(2)}
      </p>
    </div>
  );
};

export default modal;
