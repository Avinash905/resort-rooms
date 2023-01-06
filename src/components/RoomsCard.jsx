import React from "react";
import "../styles/roomscard.css";

const RoomsCard = ({ name, price, image }) => {
  return (
    <div className="rooms-card">
      <span>
        {price}
        <br />
        per night
      </span>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default RoomsCard;
