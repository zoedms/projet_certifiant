import React from "react";
import Footer from "./footer";

function Accueil () {
  return (
    <div>
      <main>
        <article>
          <div className="name_accueil">
            <h1>LES CLICHÉS DE ZOZO</h1>
            <p>Photographie</p>
          </div>
          <div className="presentation_accueil">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quibusdam veritatis mollitia? Neque, quis nobis. Error ut
              voluptate minus magni aspernatur officia illum totam fugit sunt
              rem? Ullam, sapiente, distinctio iste officia ad deleniti, in
              neque accusamus enim rem iusto? Nobis voluptates ipsa cum eum
              itaque dolores. Id, maxime quasi!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsum quibusdam veritatis mollitia?
              Neque, quis nobis. Error ut voluptate minus magni aspernatur
              officia illum totam fugit sunt rem? Ullam, sapiente, distinctio
              iste officia ad deleniti, in neque accusamus enim rem iusto? Nobis
              voluptates ipsa cum eum itaque dolores. Id, maxime quasi!
            </p>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  )
}

export default Accueil;
