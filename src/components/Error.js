import React from "react";

const ErrorPage = ({ history }) => {
  setTimeout(() => {
    history.replace("/");
  }, 2000);
  return (
    <div
      style={{
        height: "calc(100vh - 98px)"
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Page not found...
      </h1>
    </div>
  );
};

export default ErrorPage;
