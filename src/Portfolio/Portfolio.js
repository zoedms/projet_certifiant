import React from "react";
import H1Mobile from "../Components/H1Mobile";
import NavMobileDeux from "../Components/NavMobileDeux";
import NavDekstop from "../Components/NavDesktop";
import Sciara6 from "../Assets/Images/Sciara 6.jpg";
import Early from "../Assets/Images/Early.jpeg";
import Pougne from "../Assets/Images/Pougne.jpeg";
import Moto from "../Assets/Images/Moto.jpg";

function Portfolio() {
  return (
    <div>
      <NavDekstop />
      <H1Mobile />
      <main className="main_portfolio">
        <article>
          <img src={Sciara6} alt="Sciara" className="image_une" />
          <img src={Early} alt="Early" className="image_deux" />
          <img src={Pougne} alt="Pougne" className="image_trois" />
          <img src={Moto} alt="MotoGP" className="image_quatre" />
        </article>
        <NavMobileDeux />
      </main>
    </div>
  );
}

export default Portfolio;
