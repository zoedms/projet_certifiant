import React from 'react'
import "../Style/Style.css"

function Compte(props) {
  return (
    <div className="card_comptes">
      <h4>{props.nomprenom}</h4>
      <p>{props.adresse}</p>
      <p>{props.cdville}</p>
      <div className="barre_compte"></div>
      <p>{props.numéro}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Compte;