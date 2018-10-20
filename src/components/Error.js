import React from "react";

const error = ({ history }) => {
  console.log(history);
  setTimeout(() => {
    history.replace("/");
  }, 2000);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem"
        }}
      >
        Page not found...
      </h1>
    </div>
  );
};

export default error;
