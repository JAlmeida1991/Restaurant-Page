import React from "react";
import { render as Render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./containers/App";

import "./sass/styles.scss";

const app = (
  <Router>
    <App />
  </Router>
);

const el = document.getElementById("root");

Render(app, el);
