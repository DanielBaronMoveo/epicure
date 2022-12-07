import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../../store/store";
import { getRestaurantsAndDishes } from "../../store/restaurant/restaurant.action";
import { RestaurantCard } from "../../components/restaurants/RestaurantCard";
import RestaurantNavbar from "../../components/restaurants/RestaurantNavbar";
import Restaurant from "../../interfaces/restaurant";
import RestaurantsFilter from "../../components/restaurants/RestaurantsFilter";

const Restaurants = () => {
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  console.log(restaurants);

  const dispatch = useDispatch<AppDispatch>();
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    Restaurant[] | null | undefined
  >([]);
  useEffect(() => {
    if (!restaurants) {
      dispatch(getRestaurantsAndDishes());
      console.log(restaurants);
    }
    // dispatch(getRestaurantsAndDishes());
    setFilteredRestaurants(restaurants);
  }, []);

  const temp = () => {
    console.log(filteredRestaurants);
  };

  if (!restaurants) return <div>Loading...</div>;
  return (
    <div className="restaurants-page-container">
      <h6>Restaurants</h6>
      <RestaurantNavbar
        filteredRestaurants={filteredRestaurants}
        filterRestaurants={temp}
      />
      <RestaurantsFilter />
      <div className="restaurant-card-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
