import React from "react";
import Restaurant from "../../interfaces/restaurant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RestaurantCard } from "../restaurants/RestaurantCard";
import { default as arrow } from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

interface RestaurantsCarouselProps {
  restaurants: Restaurant[] | null;
}

const RestaurantsCarrousel: React.FC<RestaurantsCarouselProps> = ({
  restaurants,
}) => {
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
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 230,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!restaurants) return <div>Loading...</div>;
  return (
    <>
      <div className="carousel">
        <h5>POPULAR RESTAURANT IN EPICURE:</h5>
        <Slider {...settings}>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </Slider>
        <div className="rest-nav">
          <NavLink to="/restaurants">All Restaurants</NavLink>
          <img src={arrow} alt="" />
        </div>
      </div>
    </>
  );
};

export default RestaurantsCarrousel;
