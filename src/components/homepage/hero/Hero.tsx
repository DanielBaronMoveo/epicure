import React from "react";
import { default as search } from "../../../assets/images/search-icon.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="search-hero">
        <p>Epicure works with the top chefs restaurants in Tel-Aviv</p>
        <div>
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search for restaurants cuisine, chef"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
