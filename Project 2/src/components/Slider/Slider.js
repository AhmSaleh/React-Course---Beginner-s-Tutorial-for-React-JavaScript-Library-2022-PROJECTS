import React from "react";
import Card from "../Card/Card";

import "./Slider.css";

export default function Slider(props) {
  return (
    <div className="slider">
      {props.data.map((e) => (
        <Card
          id={e.id}
          collectionName={e.collectionName}
          img={e.img}
          price={e.price}
        />
      ))}
    </div>
  );
}
