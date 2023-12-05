import React from "react";

const Card = (props) => {
  return (
    <article className="cards__card">
      {props.estado ? (
        <div className="cards__card-circulo">{props.circle + " "}</div>
      ) : null}

      <img className="cards__card-img" src={props.img} alt="card" />

      <div className="cards__card-container-text">
        <h2 className="cards__card-title">
          {props.title} <span>Starbucks</span>
        </h2>

        <p className="cards__card-text">{props.description}</p>

        <a className="cards__card-boton" href="#">
          {props.textContentBtn}
        </a>
      </div>
    </article>
  );
};

export default Card;
