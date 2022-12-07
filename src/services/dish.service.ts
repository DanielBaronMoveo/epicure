import { dishesData } from "../data/dishes";
import { Dish } from "../interfaces/dish";

const fetchDishes = () => {
  return new Promise<Dish[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(dishesData);
    }, 2000);
  });
};

const DishService = {
  fetchDishes,
};

export default DishService;
