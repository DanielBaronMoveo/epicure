import { Dish } from "../interfaces/dish";
import axios from "axios";

const fetchDishes: () => Promise<Dish[]> = async () => {
  // return new Promise<Dish[]>((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(dishesData);
  //   }, 2000);
  // });
  const response = await axios.get(`http://localhost:5000/dish/get`);
  return response.data.dishes;
};

const fetchRestaurantDishes = (restaurantId: string) => {
  // return new Promise<Dish[]>((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(dishesData.filter((dish) => dish.restaurantId === restaurantId));
  //   }, 2000);
  // });
};

const DishService = {
  fetchDishes,
  fetchRestaurantDishes,
};

export default DishService;
