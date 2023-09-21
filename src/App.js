import React from "react";
import { Router } from "@reach/router";
import Home from "./views";
import Create from "./views/createView";
import Detail from "./views/DetailView";
import Edit from "./views/edit";

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Create path="/create" />
        <Detail path="/:id" />
        <Edit path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
