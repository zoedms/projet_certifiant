import React from "react";
import H1Mobile from "../Components/H1Mobile";
import NavMobile from "../Components/NavMobile";
import "../Style/Style.css";
import { Link } from "react-router-dom";

function Inscription() {
  return (
    <div>
      <H1Mobile />
      <main className="main_inscription">
        <article className="inscription_formulaire">
          <h3>INSCRIPTION</h3>
          <div className="nom_prenom">
            <input type="text" id="nom" name="Nom" placeholder="Nom" />
            <input type="text" id="Prénom" name="Prénom" placeholder="Prénom" />
          </div>
          <div className="email_tel_password">
            <input type="email" id="email" name="Email" placeholder="Email" />
            <input
              type="number"
              id="number"
              name="Number"
              placeholder="Numéro de téléphone"
              required
              maxlength="10"
            />
            <input
              type="password"
              id="password"
              name="Password"
              placeholder="Password"
              required
              minlength="6"
            />
            <input
              type="password"
              id="comfirmpassword"
              name="ComfirmPassword"
              placeholder="Comfirmer votre password"
              required
              minlength="6"
            />
          </div>

          <Link to="/Portfolio" id="Button" className="btn_inscription">
            Inscription
          </Link>
        </article>
        <NavMobile />
      </main>
    </div>
  );
}

export default Inscription;
