import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import "../styles/filter.css";

// fetch options dynamically from context
const Filter = () => {
  const {
    allrooms,
    valueChange,
    filters: { breakfast, pets, minPrice, maxPrice, roomPrice },
  } = useAppContext();

  const uniqueCategory = (category) => {
    const val = allrooms.map((room) => {
      return room.fields[category];
    });
    let uniqueVal = ["all", ...new Set(val)];

    return uniqueVal;
  };

  let type = uniqueCategory("type");
  let capacity = uniqueCategory("capacity");
  let size = uniqueCategory("size");
  return (
    <>
      <section className="filter-section">
        <div className="room-type-cont">
          <h3>Room Type</h3>
          <select name="roomType" id="room-type" onChange={valueChange}>
            {type.map((ele, index) => {
              return (
                <option key={index} value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <div className="guests-cont">
          <h3>Guests</h3>
          <select name="guests" id="guests" onChange={valueChange}>
            {capacity.map((ele, index) => {
              return (
                <option key={index} value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <div className="room-price">
          <h3>Room Price</h3>
          <p>${roomPrice}</p>
          <input
            type="range"
            name="roomPrice"
            id="room-price"
            min={minPrice}
            max={maxPrice}
            value={roomPrice}
            onChange={valueChange}
          />
        </div>
        <div className="guests-cont">
          <h3>Room Size</h3>
          <select name="roomSize" id="Size" onChange={valueChange}>
            {size
              ? size.map((ele, index) => {
                  return (
                    <option key={index} value={ele}>
                      {ele}
                    </option>
                  );
                })
              : ""}
          </select>
        </div>
        <div className="check-box-cont">
          <input
            type="checkbox"
            id="breakfast"
            name="breakfast"
            value={breakfast}
            onClick={valueChange}
          />
          <label htmlFor="breakfast">Breakfast</label>
          <br />
          <input
            type="checkbox"
            id="pets"
            name="pets"
            value={pets}
            onClick={valueChange}
          />
          <label htmlFor="pets">Pets</label>
          <br />
        </div>
      </section>
    </>
  );
};

export default Filter;
