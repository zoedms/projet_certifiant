import React from "react";
import { Link } from "react-router-dom";
import "../Style/Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function NavMobileDeux() {
  return (
    <nav className="nav_mobile_deux">
      <Link style={{ textDecoration: "none", color: "black" }} to="/Portfolio">
        Portfolio
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/Tarifs">
        Tarifs
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/Contact">
        Contact
      </Link>
      <Link to="/MonCompte">
        <FontAwesomeIcon className="icon_nav" icon={faCircleUser} />
      </Link>
    </nav>
  );
}

export default NavMobileDeux;
