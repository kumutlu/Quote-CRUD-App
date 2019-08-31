import React from "react";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <nav className="white">
      <div className="nav-wrapper">
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    </nav>
  );
};

export default Header;
