import React from "react";
import { useRouteError } from "react-router-dom";

const Errors = () => {
  const myerror = useRouteError();
  console.log(myerror);
  return (
    <div>
      <h1>
        {myerror.status} {myerror.data}
      </h1>
      <img
        src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif"
        alt=""
      />
    </div>
  );
};

export default Errors;
