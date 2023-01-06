import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/banner.css";

const Banner = ({ title, btnText, link }) => {
  return (
    <div className="banner flex-center">
      <h2>{title}</h2>
      <NavLink to={link}>
        <button className="btn">{btnText}</button>
      </NavLink>
    </div>
  );
};

export default Banner;
