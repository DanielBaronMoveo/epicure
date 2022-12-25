import React from "react";
import { default as arrow } from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

interface RestaurantsCarouselProps {
  children: React.ReactNode;
}

const RestaurantsCarrousel: React.FC<RestaurantsCarouselProps> = ({
  children,
}) => {
  return (
    <>
      <div className="dish-carousel">
        <h5>POPULAR RESTAURANT IN EPICURE:</h5>
        <div className="res-card-container">{children}</div>
        <div className="rest-nav">
          <NavLink to="/restaurants">All Restaurants</NavLink>
          <img src={arrow} alt="" />
        </div>
      </div>
    </>
  );
};

export default RestaurantsCarrousel;
