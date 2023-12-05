import React from "react";
import LOGO from "../img/logo.png";
import BtnHeader from "../subComponents/BtnHeader.jsx";

function Header() {
  return (
    <header className="header">
      <div className="header__container-logo">
        <img className="header__logo" src={LOGO} alt="logo.png" />
      </div>

      <nav className="header__nav">
        <BtnHeader content={"INICIO"} />
        <BtnHeader content={"CAFE"} />
        <BtnHeader content={"SOBRE NOSOTROS"} />
        <BtnHeader content={"DELIVERY"} />
      </nav>

      <div className="header__container-login">
        <i className="bi bi-person-circle"></i>
      </div>

      <div className="header__container-mobile">
        <i className="bi bi-list"></i>
      </div>
    </header>
  );
}

export default Header;
