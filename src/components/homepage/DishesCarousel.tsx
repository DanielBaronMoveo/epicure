import React from "react";
import { Dish } from "../../interfaces/dish";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { DishCard } from "./dishes/DishCard";
import { default as arrow } from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

interface DishesCarouselProps {
  dishes: Dish[];
}

const DishesCarousel: React.FC<DishesCarouselProps> = ({ dishes }) => {
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
        breakpoint: 300,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 220,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!dishes.length) return <div>Loading...</div>;
  return (
    <div className="dish-carousel">
      <h5>SIGNATURE DISH OF:</h5>
      <Slider className="slider" {...settings}>
        {dishes.map((dish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </Slider>
      <div className="rest-nav">
        <NavLink to="/restaurants">All Restaurants</NavLink>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default DishesCarousel;
