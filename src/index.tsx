// eslint-disable-next-line no-use-before-define
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createServer } from "miragejs";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/users", () => [
      {
        id: 1,
        name: "André",
        lastName: "Bezerra",
        habilites: [],
        about:
          "Atualmente resolvi buscar o que me brilha os olhos, que é a tecnologia! Desde então estou fortemente empenhado nessa área, mas especificamente Front-End ReactJS",
        projects: [],
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
