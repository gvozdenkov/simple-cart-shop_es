import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="header page__section">
      <img
        src={logo}
        alt="Dailyland milk products logo"
        className="header__logo"
      />
    </header>
  );
}

export default Header;
