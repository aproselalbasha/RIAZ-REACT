import { HEAD_LOGO } from "../util/constant";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
