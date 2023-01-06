import React, { useEffect } from "react";
import "../styles/searchrooms.css";
import Filter from "./Filter";
import RoomsCard from "./RoomsCard";
import { useAppContext } from "../context/appContext";

const SearchRooms = () => {
  const { getRooms, filterProducts } = useAppContext();

  return (
    <section className="searchrooms-section">
      <div className="searchrooms-cont container">
        <h2>Search Rooms</h2>
        <Filter />
        <div className="rooms-card-cont">
          {filterProducts.map((ele) => {
            return (
              <RoomsCard
                key={ele.sys.id}
                name={ele.fields.name}
                price={ele.fields.price}
                image={ele.fields.images[0].fields.file.url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchRooms;
