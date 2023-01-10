import React, { useEffect, useState } from "react";
import Restaurant from "../../interfaces/restaurant";
import { useParams } from "react-router-dom";
import RestaurantService from "../../services/restaurant.service";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../../store/store";
import DishesTable from "../../components/homepage/DishesTable";
import { getDishes } from "../../store/dish/dish.action";
import { default as clock } from "../../assets/images/clock.svg";
import { ThreeCircles } from "react-loader-spinner";
import { Dish } from "../../interfaces/dish";

const RestaurantsDetails = () => {
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  const dispatch = useDispatch<AppDispatch>();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [restaurantDishes, setRestaurantDishes] = useState<Dish[] | null>([]);
  const { id } = useParams();

  const loadRestaurant = async () => {
    const restaurant = await RestaurantService.getRestaurantById(id);
    const resDishes = await RestaurantService.getRestaurantDishes(id, dishes);
    setRestaurantDishes(resDishes);
    setRestaurant(restaurant);
  };

  useEffect(() => {
    if (!dishes) {
      dispatch(getDishes());
    }
    loadRestaurant();
  }, [dishes]);

  if (!restaurant || !restaurantDishes)
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
    <div className="restaurant-details-container space-header">
      <div className="logo-container">
        <img className="rest-logo" src={restaurant.image} alt="" />
      </div>
      <div className="container flex column">
        <div className="details">
          <h5>{restaurant.name}</h5>
          <h6>{restaurant.chef.map((chef) => chef.name)}</h6>
          <div className="rest-open">
            <img src={clock} alt="" />
            <p>Open now</p>
          </div>
          <div className="rest-menu-types">
            <ul className="clean-list flex">
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
            </ul>
          </div>
        </div>

        <DishesTable dishes={restaurantDishes} isDetailedRestaurant={true} />
      </div>
    </div>
  );
};

export default RestaurantsDetails;
