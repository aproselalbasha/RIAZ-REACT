import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./SRC/Header";
import Body from "./SRC/Body.js";
const Appcomponent = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcomponent />);
