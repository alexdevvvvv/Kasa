import logo from "../images/logo.png";
import "../styles/components/_footer.scss";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="logo" />
      <p className="footer__p">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
