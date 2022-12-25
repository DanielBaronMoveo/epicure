import React from "react";
import { default as arrow } from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

interface DishesCarouselProps {
  children: React.ReactNode;
}

const DishesCarousel: React.FC<DishesCarouselProps> = ({ children }) => {
  return (
    <div className="dish-carousel">
      <h5>SIGNATURE DISH OF:</h5>
      {children}
      <div className="rest-nav">
        <NavLink to="/restaurants">All Restaurants</NavLink>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default DishesCarousel;
