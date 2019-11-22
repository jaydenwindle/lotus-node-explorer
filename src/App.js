import React from "react";
import { Router } from "@reach/router";

import Login from "./components/Login";
import Explorer from "./components/Explorer";

function App() {
  return (
    <Router>
      <Login path="/" />
      <Explorer path="/explorer" />
    </Router>
  );
}

export default App;
