import React from "react";
import "../Style/Style.css";
import Sciara from "../Assets/Images/Sciara 1.jpg";
import NavMobile from "../Components/NavMobile";
import H1Mobile from "../Components/H1Mobile";
import AccueilName from "../Components/AccueilName";

function Accueil() {
  return (
    <main>
      <H1Mobile />
      <article>
        <div className="mobile_accueil">
          <img src={Sciara} alt="Sciara" className="image_mobile" />
        </div>
        <AccueilName />
      </article>
      <NavMobile />
    </main>
  );
}

export default Accueil;
