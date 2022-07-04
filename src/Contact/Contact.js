import React from "react";
import H1Mobile from "../Components/H1Mobile";
import "../Style/Style.css";
import NavMobileDeux from "../Components/NavMobileDeux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"; 
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <H1Mobile />
      <main className="main_contact">
        <h3>Réseaux sociaux</h3>
        <div className="reseaux_sociaux">
          <Link to="https://www.facebook.com/zoedumas31">
            <FontAwesomeIcon className="icon_reseaux" icon={faFacebookSquare} />
          </Link>
          <Link to="https://www.instagram.com/xcyzbat/?h1=fr">
            <FontAwesomeIcon
              className="icon_reseaux"
              icon={faInstagramSquare}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/zoe-dumas/">
            <FontAwesomeIcon className="icon_reseaux" icon={faLinkedin} />
          </Link>
        </div>

        <article className="article_contact">
          <h3>Me contacter</h3>
          <div className="np_contact">
            <input type="text" id="nom" name="Nom" placeholder="Nom" />
            <input type="text" id="Prénom" name="Prénom" placeholder="Prénom" />
          </div>
          <div className="eo_contact">
            <input type="email" id="Email" name="Email" placeholder="Email" />
            <input type="text" id="Objet" name="Objet" placeholder="Objet" />
          </div>
          <input
            className="message_text"
            type="textarea"
            id="Message"
            name="Message"
            placeholder="Message"
          />
          <button className="button_contact" type="submit" id="submit" name="Submit">
            Envoyer
          </button>
        </article>
      </main>
      <NavMobileDeux />
    </div>
  );
}

export default Contact;
