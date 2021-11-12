// eslint-disable-next-line no-use-before-define
import React from "react";
import "./App.css";
// import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import InitialPage from "./pages/InitialPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <InitialPage />
    </>
  );
}

export default App;
