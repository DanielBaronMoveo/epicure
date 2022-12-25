import React from "react";
import { DishCard } from "./dishes/DishCard";
import { Dish } from "../../interfaces/dish";
import { default as arrow } from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";
import Carousel from "../carousel/carousel";

interface ChefCarouselProps {
  dishes: Dish[];
  isChef: boolean;
}

const ChefRestaurantCarousel: React.FC<ChefCarouselProps> = ({
  dishes,
  isChef,
}) => {
  return (
    <div className="dish-carousel">
      <h3>Chef of the week:</h3>
      <Carousel data={dishes} Content={DishCard} isChef={isChef} />
      <div className="rest-nav">
        <NavLink to="/restaurants">All Restaurants</NavLink>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ChefRestaurantCarousel;
