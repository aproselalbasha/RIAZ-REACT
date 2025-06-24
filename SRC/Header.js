import { useEffect, useState } from "react";
import { HEAD_LOGO } from "../util/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [login_btn, setlogin_btn] = useState("LOGIN");
  useEffect(() => {
    console.log("useeffect called ");
  }, []);
  console.log(" body rended");
  return (
    <div className="header">
      <div className="logo">
        <img src={HEAD_LOGO} alt="LOGO" />
      </div>

      <div className="header-menu">
        <ul className="list-header">
          <li>
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
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
