import { restaurantsData } from "../data/restaurants";
import DishService from "./dish.service";
import Restaurant from "../interfaces/restaurant";
import ChefService from "./chef.service";
import { Dish } from "../interfaces/dish";

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
  if (!id) return Promise.resolve(undefined);
  return new Promise<Restaurant | undefined>((resolve) => {
    setTimeout(async () => {
      const restaurant = restaurantsData.find(
        (restaurant) => restaurant._id === id
      );
      if (!restaurant) return resolve(undefined);
      const chef = await ChefService.getChefById(restaurant.chefId);
      if (!chef) return resolve(undefined);
      console.log(chef);
      const updatedRestaurant = { ...restaurant, chef: chef?.name };
      resolve(updatedRestaurant);
    }, 1000);
  });
};

const getRestaurantDishes = (
  restaurantId: string | undefined,
  dishes: Dish[] | null
) => {
  if (!dishes) return null;
  return dishes.filter((dish) => dish.restaurantId === restaurantId);
};

const RestaurantService = {
  getRestaurantsAndDishesData,
  getRestaurantById,
  getRestaurantDishes,
};

export default RestaurantService;
