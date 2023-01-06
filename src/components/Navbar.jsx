import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/resort-rooms">Home</NavLink>
          </li>
          <li>
            <NavLink to="/resort-rooms/rooms">Rooms</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
