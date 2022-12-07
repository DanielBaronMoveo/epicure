import React, { useEffect, useState } from "react";
import Restaurant from "../../interfaces/restaurant";
import { useParams } from "react-router-dom";
import RestaurantService from "../../services/restaurant.service";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../../store/store";
import DishesTable from "../../components/homepage/DishesTable";
import { getDishes } from "../../store/dish/dish.action";
import { default as clock } from "../../assets/images/clock.svg";

const RestaurantsDetails = () => {
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  const dispatch = useDispatch<AppDispatch>();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const { id } = useParams();

  const loadRestaurant = async () => {
    const restaurant = await RestaurantService.getRestaurantById(id);
    setRestaurant(restaurant);
  };

  useEffect(() => {
    loadRestaurant();
    if (!dishes) {
      dispatch(getDishes());
    }
  }, []);

  if (!restaurant || !dishes) return <div>Loading...</div>;
  return (
    <div className="restaurant-details-container">
      <div className="logo-container">
        <img className="rest-logo" src={restaurant.image} alt="" />
      </div>
      <div className="details">
        <h5>{restaurant.name}</h5>
        <h6>{restaurant.chef}</h6>
        <div className="rest-open">
          <img src={clock} alt="" />
          <p>Open now</p>
        </div>
      </div>

      <DishesTable dishes={dishes} isDetailedRestaurant={true} />
    </div>
  );
};

export default RestaurantsDetails;
