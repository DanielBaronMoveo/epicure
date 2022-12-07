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
      return <div>Loading...</div>;
    } else
      return (
        <>
          <Hero />
          <RestaurantsCarousel restaurants={restaurants} />
          <DishesCarousel dishes={dishes} />
          <RestaurantsTable restaurants={restaurants} />
          <DishesTable dishes={dishes} />
          <DishLabels />
          <WeeklyChef dishes={dishes} />
          <About />
        </>
      );
  };

  return <div className="home-page-container">{renderContent()}</div>;
};

export default Homepage;
