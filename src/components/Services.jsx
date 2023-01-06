import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCocktail className="icon" />,
      title: "Free Cocktails",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      id: 2,
      icon: <FaHiking className="icon" />,
      title: "Endless Hiking",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      id: 3,
      icon: <FaShuttleVan className="icon" />,
      title: "Free Shuttle",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      id: 4,
      icon: <FaBeer className="icon" />,
      title: "Strongest Beer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
  ];
  return (
    <section className="services-section">
      <div className="services-div container">
        <h2>Services</h2>
        <div className="container services-cont">
          {services.map((ele) => {
            return (
              <ServiceCard
                key={ele.id}
                title={ele.title}
                desc={ele.desc}
                icon={ele.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
