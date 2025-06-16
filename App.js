import React from "react";
import ReactDOM from "react-dom/client";

const num = 1000;
//functional component
const Component = () => {
  return (
    <div>
      <h1>i am from functional component</h1>
    </div>
  );
};
//react element
const h2 = (
  <div className="main">
    <h2 className="jsx">i am from jsx</h2>

    <h3 className="jsx">{num}</h3>
    {Component()}
    <Component />
    <Component></Component>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h2);
