import React from "react";

const ErrorPage = ({ history }) => {
  setTimeout(() => history.replace("/"), 2000);
  return (
    <div className="error-container">
      <h1 className="error-message">Page not found...</h1>
    </div>
  );
};

export default ErrorPage;
