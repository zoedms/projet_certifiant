import React from "react";
import "../Style/Style.css";
import H1Mobile from "../Components/H1Mobile";
import Sciara from "../Assets/Images/Sciara 9.jpeg";
import NavMobile from "../Components/NavMobile";
import { Link } from "react-router-dom";

function Connexion() {
  return (
    <div>
      <H1Mobile />
      <main className="main_connexion">
        <div>
          <img className="img_connexion" src={Sciara} alt="Sciara" />
        </div>
        <div className="container_connexion">
          <input
            type="email"
            className="email_input"
            placeholder="name@gmail.com"
          />
          <input
            type="password"
            className="password_input"
            placeholder="Password"
          />
          <Link to="/Portfolio" className="btn_connexion">
            Connexion
          </Link>
        </div>
        <NavMobile />
      </main>
    </div>
  );
}

export default Connexion;
