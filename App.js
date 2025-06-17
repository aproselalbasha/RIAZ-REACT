import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtgWF-FaRWm6DbABSc1fAxOzex9URQzHFQg&s"
          alt="LOGO"
        />
      </div>
      <div className="search-bar">
        <input type="text" />
        <button>SEARCH</button>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
