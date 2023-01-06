import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <h2 className="header-heading">
        Resort <span>Rooms</span>
      </h2>
      <Navbar />
    </header>
  );
};

export default Header;
