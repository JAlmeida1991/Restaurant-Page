import React from "react";
import { BrowserRouter } from "react-router-dom";

import Page from "../components/Page";

const App = props => {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
};

export default App;
