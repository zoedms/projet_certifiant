import React from "react";
import Nav from "./Nav.js";

function Header() {
  return (
    <header>
      <div>
        <Link to="/" className="link_header">
          Les Clichés de Zozo
        </Link>
      </div>
      <div className="header_nav">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
