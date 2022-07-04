import React from 'react';

function Nav(props) {
  return (
    <nav>
      <Link to="/">Portfolio</Link>
      <Link to="/">Tarifs</Link>
      <Link to="/">Contact</Link>
      <Link to="/">Mon Compte</Link>
    </nav>
  );
}

export default Nav;