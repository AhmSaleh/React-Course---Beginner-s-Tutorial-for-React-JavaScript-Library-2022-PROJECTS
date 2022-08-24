import React from "react";
import "./Card";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />

      <div className="description">
        <p className="id">#{props.id}</p>
        <p className="collection-name">{props.collectionName}</p>
        <p className="price">Ξ{props.price}</p>
      </div>
    </div>
  );
}
