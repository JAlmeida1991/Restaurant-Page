import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Page from "./containers/Page";

import "./sass/styles.scss";

const page = (
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);

ReactDOM.render(page, document.getElementById("root"));
