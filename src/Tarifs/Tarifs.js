import React from "react";
import TarifsCard from "../Components/TarifsCard";
import H1Mobile from "../Components/H1Mobile";
import NavMovileDeux from "../Components/NavMobileDeux";
import NavDekstop from "../Components/NavDesktop";
import "../Style/Style.css"

function Tarifs() {
  return (
    <main className="main_tarifs">
      <H1Mobile />
      <div className="card_classique">
        <TarifsCard
          titre="Formule Classique"
          paragraphe="5 clichés, retouchées, séance de 30 minutes, envoie de photo de haute qualité par wetransfer"
          tarifs="A partir de 65 euros"
        />
      </div>
      <div className="card_standard">
        <TarifsCard
          titre="Formule Standard"
          paragraphe="10 clichés, retouchées, séance de 1h, envoie de photo de haute qualité par wetransfer"
          tarifs="A partir de 85 euros"
        />
      </div>
      <div className="card_prestige">
        <TarifsCard
          titre="Formule Prestige"
          paragraphe="20 clichés, retouchées, séance de 2h, envoie de photo de haute qualité par wetransfer"
          tarifs="A partir de 125 euros"
        />
      </div>
      <NavMovileDeux />
    </main>
  );
}

export default Tarifs;
