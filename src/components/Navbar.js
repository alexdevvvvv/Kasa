import React from "react";
import logo from "../images/logo.png";
import "../styles/components/_navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="logo" />
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <a href="/accueil">Accueil</a>
        </li>
      </ul>
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <a href="/a-propos">A Propos</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
