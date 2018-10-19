import React from "react";
import { BrowserRouter } from "react-router-dom";

import Page from "../components/Page";

const container = props => {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
};

export default container;
