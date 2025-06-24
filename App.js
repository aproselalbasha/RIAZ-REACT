import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./SRC/Header";
import Body from "./SRC/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./SRC/About.js";
import Contact from "./SRC/Contact.js";
import Errors from "./SRC/Errors.js";
const Appcomponent = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Appcomponent />,
    errorElement: <Errors />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
