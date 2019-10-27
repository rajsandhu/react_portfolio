// import React, { Component } from 'react'
//
// import Container from "./components/container";
//
// function App() {
//     return <Container />;
// }
//
// export default App

import React, from "react";
import ReactDOM from "react-dom";

import Container from "./components/container";

import "./styles.css";

function App() {
    return <Container />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);