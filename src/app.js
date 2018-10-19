import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import MasterRouter from "./router/MasterRouter";

ReactDOM.render(
  <BrowserRouter>
    <MasterRouter />
  </BrowserRouter>,
  document.getElementById("app")
);
