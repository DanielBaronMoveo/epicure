import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/homepage/hero/Hero";
import RestaurantsCarousel from "../components/homepage/RestaurantsCarousel";
import DishesCarousel from "../components/homepage/DishesCarousel";
import RestaurantsTable from "../components/homepage/RestaurantsTable";
import DishesTable from "../components/homepage/DishesTable";
import DishLabels from "../components/homepage/dishes/DishLabels";
import { WeeklyChef } from "../components/homepage/WeeklyChef";
import About from "../components/homepage/About";
import { getRestaurantsAndDishes } from "../store/restaurant/restaurant.action";
import { AppDispatch, RootStore } from "../store/store";
import { ThreeCircles } from "react-loader-spinner";
import Carousel from "../components/carousel/carousel";
import { DishCard } from "../components/homepage/dishes/DishCard";
import { RestaurantCard } from "../components/restaurants/RestaurantCard";

const Homepage: React.FC = () => {
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!restaurants || !dishes) {
      dispatch(getRestaurantsAndDishes());
    }
  }, []);
  const renderContent = () => {
    if (!restaurants || !dishes) {
      return (
        <div className="loader">
          <ThreeCircles
            height="100"
            width="100"
            color="#F9F4EA"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      );
    } else
      return (
        <div className="space-header">
          <Hero />
          <div className="container">
            <RestaurantsCarousel>
              <Carousel data={restaurants} Content={RestaurantCard} />
            </RestaurantsCarousel>
            <DishesCarousel>
              <Carousel data={dishes} Content={DishCard} />
            </DishesCarousel>
            <RestaurantsTable restaurants={restaurants} />
            <DishesTable dishes={dishes} />
          </div>
          <DishLabels />
          <div className="container">
            <WeeklyChef dishes={dishes} />
          </div>
          <About />
        </div>
      );
  };

  return renderContent();
};

export default Homepage;
