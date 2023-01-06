import React from "react";
import "../styles/servicecard.css";

const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div className="service-card flex-center">
      {icon}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
