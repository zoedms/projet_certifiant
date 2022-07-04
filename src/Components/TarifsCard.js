import React from 'react';

function TarifsCard(props) {
  return (
    <article className="card__tarif">
        <h3>{props.titre}</h3>
        <p>{props.paragraphe}</p>
        <p>{props.tarifs}</p>
    </article>
  );
}

export default TarifsCard;
