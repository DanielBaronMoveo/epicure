import { restaurantsData } from "../data/restaurants";
import DishService from "./dish.service";
import Restaurant from "../interfaces/restaurant";

const fetchRestaurants = () => {
  return new Promise<Restaurant[]>((resolve) => {
    setTimeout(() => {
      resolve(restaurantsData);
    }, 2000);
  });
};

const getRestaurantsAndDishesData = () => {
  return Promise.all([fetchRestaurants(), DishService.fetchDishes()]);
};

const getRestaurantById = (id: string | undefined) => {
  return new Promise<Restaurant | undefined>((resolve) => {
    setTimeout(() => {
      resolve(restaurantsData.find((restaurant) => restaurant._id === id));
    }, 1000);
  });
};

const RestaurantService = {
  getRestaurantsAndDishesData,
  getRestaurantById,
};

export default RestaurantService;
