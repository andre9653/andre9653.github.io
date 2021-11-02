// eslint-disable-next-line no-use-before-define
import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={InitialPage} />
    </BrowserRouter>
  );
}

export default App;
