import React from "react";
import { default as search } from "../../../assets/images/search-icon.svg";
import { default as heroImage } from "../../../assets/images/main-image.png";
const Hero = () => {
  return (
    // <div className="hero-container">
    //   <img src={heroImage} alt="hero" />
    //   <div className="search-hero">
    //     <div className="hero-title">
    //       <h1>Epicure works with the top chefs restaurants in Tel Aviv</h1>
    //     </div>
    //     <div className="search-input">
    //       <img src={search} alt="search" />
    //       <input
    //         type="text"
    //         placeholder="Search for restaurants cuisine, chef"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="hero-main">
      <img className="hero-img" src={heroImage} alt="hero-img"></img>
      <div className="box">
        <div className="text">
          <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
        </div>
        <div className="search">
          <button>
            <img src={search} alt="search-icon"></img>
          </button>
          <input placeholder="Search for restaurant cuisine, chef"></input>
        </div>
      </div>
    </div>
  );
};

export default Hero;
