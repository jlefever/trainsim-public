import "@fortawesome/fontawesome-free/css/all.css";
import "bulma-o-steps/bulma-steps.css";
import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// This is the entry point of the frontend.
const element = document.createElement("div");
element.setAttribute("id", "root");
document.body.appendChild(element);
ReactDOM.render(React.createElement(App), element);