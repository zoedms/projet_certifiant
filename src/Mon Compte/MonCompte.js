import React from "react";
import "../Style/Style.css";
import H1Mobile from "../Components/H1Mobile";
import NavMobileDeux from "../Components/NavMobileDeux";
import Sciara from "../Assets/Images/Sciara 6.jpg";
import Compte from "../Components/Compte.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"

function MonCompte() {
  return (
    <div>
      <H1Mobile />
      <main className="main_compte">
        <article className="compte_card">
          <img src={Sciara} alt="Sciara" className="sciara_compte" />
          <div className="card_compte">
            <Compte
              nomprenom="Zoé DUMAS"
              adresse="Lieu dit Les Pradals"
              cdville="81470 Montgey"
              numéro="06 56 43 56 89"
              email="name@example.com"
            />
          </div>
          <div className="button_photo">
            <Link to="/Photos" className="photo_lien">
              Mes photos
              <FontAwesomeIcon className="chevron_un" icon={faChevronRight} size="lg" />
              <FontAwesomeIcon className="chevron_deux" icon={faChevronRight} size="lg" />
              <FontAwesomeIcon
                className="chevron_trois"
                icon={faChevronRight}
                size="lg"
              />
            </Link>
          </div>
        </article>
      </main>
      <NavMobileDeux />
    </div>
  );
}

export default MonCompte;
