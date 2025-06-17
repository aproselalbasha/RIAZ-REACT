enable npm :npm init
install the parcel :npm i -d parcel
to add react and react-dom :npm i react and npm i react-dom
to start the project npx parcel index.html

//to add script as type={module}
//to get react and react-dom add the imports
import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement(
"div",
{ id: "main" },
React.createElement("div", {}, [
React.createElement("h1", { key: "heading" }, "Hello World from React"),
React.createElement("p", { key: "para" }, "Hello World from aprose inner"),
])
);

//through javascript dom
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// Heading.append(h1);

component
1.functional

//1.object and array destructure
2.map filter reduce
