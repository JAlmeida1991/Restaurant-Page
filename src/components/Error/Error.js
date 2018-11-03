import React from "react";

const ErrorPage = ({ history }) => {
  setTimeout(() => {
    history.replace("/");
  }, 2000);
  return (
    <div
      style={{
        flex: "1 0 auto"
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Page not found...
      </h1>
    </div>
  );
};

export default ErrorPage;
