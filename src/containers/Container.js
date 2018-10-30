import React from "react";
import { BrowserRouter } from "react-router-dom";

import Page from "./Page";

const Container = props => (
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);

export default Container;
