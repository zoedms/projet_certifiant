import React from "react";
import { Link } from "react-router-dom";
import "../Style/Style.css";
import Inscription from "../Inscription/Inscription.js"
import Connexion from "../Connexion/Connexion.js"

function NavMobile() {
  return (
    <nav className="nav_mobile">
      <Link style={{ textDecoration: "none", color: "black" }} to="/Inscription" element={Inscription}>
        Inscription
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/Connexion" element={Connexion}>
        Connexion
      </Link>
    </nav>
  );
}

export default NavMobile;
