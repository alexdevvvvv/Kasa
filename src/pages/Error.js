import React from "react";
import "../styles/layout/_error.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Error() {
  return (
    <div>
      <Navbar />
      <h3 className="Error__404">404</h3>
      <p className="Error__404__p">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a href="/accueil" className="Error__404__a">
        Retourner sur la page d’accueil
      </a>
      <Footer />
    </div>
  );
}

export default Error;
