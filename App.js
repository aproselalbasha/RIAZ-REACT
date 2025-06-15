import React from "react";
import ReactDOM from "react-dom/client";

const Heading = document.getElementById("root");
//React

const h1 = React.createElement(
  "div",
  { id: "main" },
  React.createElement("div", {}, [
    React.createElement("h1", { key: "heading" }, "Hello World from React"),
    React.createElement("p", { key: "para" }, "Hello World from aprose inner"),
  ])
);
const root = ReactDOM.createRoot(Heading);
root.render(h1);
console.log(h1);

//through javascript dom
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// Heading.append(h1);
