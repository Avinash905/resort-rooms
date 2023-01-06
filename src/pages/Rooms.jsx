import React from "react";
import "../styles/rooms.css";
import Banner from "../components/Banner";
import SearchRooms from "../components/SearchRooms";

const Rooms = () => {
  return (
    <>
      <section className="rooms-section flex-center">
        <Banner
          title={"our rooms"}
          btnText={"return home"}
          link={"/resort-rooms"}
        />
      </section>
      <SearchRooms />
    </>
  );
};

export default Rooms;
