import React from 'react';

function TarifsCard(props) {
  return (
    <article className="card__tarif">
        <h3>{props.titre}</h3>
        <div className="barre_h1"></div>
        <p>{props.paragraphe}</p>
        <p className="tarifs_p">{props.tarifs}</p>
    </article>
  );
}

export default TarifsCard;
