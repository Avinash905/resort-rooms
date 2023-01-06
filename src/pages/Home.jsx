import React from "react";
import Banner from "../components/Banner";
import "../styles/home.css";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <section className="home-section flex-center">
        <Banner
          title={"Luxurious Rooms"}
          btnText={"our rooms"}
          link={"/resort-rooms/rooms"}
        />
      </section>
      <Services />
    </>
  );
};

export default Home;
