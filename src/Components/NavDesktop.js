import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav_desktop">
      <Link to="/">Portfolio</Link>
      <Link to="/">Tarifs</Link>
      <Link to="/">Contact</Link>
      <Link to="/">Mon Compte</Link>
    </nav>
  );
}

export default Nav;
