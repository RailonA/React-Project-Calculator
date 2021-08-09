/* eslint-disable func-style */
/* eslint-disable sort-imports */
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/app";

function Calculator () {

    return <App />;

}

ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);
/* eslint-enable func-style */
/* eslint-disable sort-imports */
