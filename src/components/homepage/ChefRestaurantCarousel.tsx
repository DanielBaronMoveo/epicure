import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DishCard } from "./dishes/DishCard";
import { Dish } from "../../interfaces/dish";
import { default as arrow } from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

interface ChefCarouselProps {
  dishes: Dish[];
}

const ChefRestaurantCarousel: React.FC<ChefCarouselProps> = ({ dishes }) => {
  const [isChef, setIsChef] = useState(true);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <h3>Chef of the week:</h3>
      <Slider {...settings}>
        {dishes.map((dish) => {
          return <DishCard isChef={isChef} dish={dish} key={dish._id} />;
        })}
      </Slider>
      <div className="rest-nav">
        <NavLink to="/restaurants">All Restaurants</NavLink>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ChefRestaurantCarousel;
