import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../../store/store";
import { getRestaurantsAndDishes } from "../../store/restaurant/restaurant.action";
import { RestaurantCard } from "../../components/restaurants/RestaurantCard";
import RestaurantNavbar from "../../components/restaurants/RestaurantNavbar";
import Restaurant from "../../interfaces/restaurant";
import RestaurantsFilter from "../../components/restaurants/RestaurantsFilter";
import { ThreeCircles } from "react-loader-spinner";

const Restaurants = () => {
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const dispatch = useDispatch<AppDispatch>();
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    Restaurant[] | null | undefined
  >([]);
  useEffect(() => {
    if (!restaurants) {
      dispatch(getRestaurantsAndDishes());
    }
    setFilteredRestaurants(restaurants);
  }, []);

  const temp = () => {
    console.log(filteredRestaurants);
  };

  if (!restaurants)
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
  return (
    <>
      <div className="container space-header">
        <h6 className="restaurants-title">Restaurants</h6>
        <RestaurantNavbar
          filteredRestaurants={filteredRestaurants}
          filterRestaurants={temp}
        />
      </div>
      <RestaurantsFilter />
      <div className="container">
        <div className="restaurant-card-container">
          {restaurants.map((restaurant) => (
            <RestaurantCard item={restaurant} key={restaurant._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
