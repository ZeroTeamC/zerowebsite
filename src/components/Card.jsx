import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <a href={props.link}>
        <img src={props.image}></img>
      </a>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Card;
