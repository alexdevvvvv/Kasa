import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import { Navigate } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
