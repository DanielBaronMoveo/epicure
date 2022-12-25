import { dishesData } from "../data/dishes";
import { Dish } from "../interfaces/dish";

const fetchDishes = () => {
  return new Promise<Dish[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(dishesData);
    }, 2000);
  });
};

const fetchRestaurantDishes = (restaurantId: string) => {
  return new Promise<Dish[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(dishesData.filter((dish) => dish.restaurantId === restaurantId));
    }, 2000);
  });
};

const DishService = {
  fetchDishes,
  fetchRestaurantDishes,
};

export default DishService;
