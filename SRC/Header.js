import { useState } from "react";
import { HEAD_LOGO } from "../util/constant";

const Header = () => {
  const [login_btn, setlogin_btn] = useState("LOGIN");
  console.log(" body rended");
  return (
    <div className="header">
      <div className="logo">
        <img src={HEAD_LOGO} alt="LOGO" />
      </div>

      <div className="header-menu">
        <ul className="list-header">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
          <li>CART</li>
          <li>
            <button
              className="login_btn"
              onClick={() => {
                login_btn == "LOGIN"
                  ? setlogin_btn("LOGOUT")
                  : setlogin_btn("LOGIN");
              }}
            >
              {login_btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
