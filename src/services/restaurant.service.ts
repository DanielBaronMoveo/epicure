// import { restaurantsData } from "../data/restaurants";
import DishService from "./dish.service";
import { Dish } from "../interfaces/dish";
import axios, { AxiosError } from "axios";
import Restaurant from "../interfaces/restaurant";

const fetchRestaurants: () => Promise<Restaurant[]> = async () => {
  // return new Promise<Restaurant[]>((resolve) => {
  //   setTimeout(() => {
  //     resolve(restaurantsData);
  //   }, 2000);
  // });
  try {
    const response = await axios.get("http://localhost:5000/restaurant/get");
    return response.data.restaurants;
  } catch (error: AxiosError<Error> | any) {
    console.log(error.response.data.error);
    throw new Error(error.response.data.error);
  }
};

const getRestaurantsAndDishesData = async () => {
  return Promise.all([await fetchRestaurants(), DishService.fetchDishes()]);
};

const getRestaurantById: (
  id: string | undefined
) => Promise<Restaurant> = async (id: string | undefined) => {
  // if (!id) return Promise.resolve(undefined);
  // return new Promise<Restaurant | undefined>((resolve) => {
  //   setTimeout(async () => {
  //     const restaurant = restaurantsData.find(
  //       (restaurant) => restaurant._id === id
  //     );
  //     if (!restaurant) return resolve(undefined);
  //     const chef = await ChefService.getChefById(restaurant.chefId);
  //     if (!chef) return resolve(undefined);
  //     console.log(chef);
  //     const updatedRestaurant = { ...restaurant, chef: chef?.name };
  //     resolve(updatedRestaurant);
  //   }, 1000);
  // });

  const response = await axios.get(
    `http://localhost:5000/restaurant/get/${id}`
  );
  return response.data.restaurant;
};

const getRestaurantDishes = async (
  restaurantId: string | undefined,
  dishes: Dish[] | null
) => {
  if (!dishes) return null;
  const filteredDishes = dishes.filter(
    (dish) => dish.restaurant._id === restaurantId
  );

  return filteredDishes;
};

const RestaurantService = {
  getRestaurantsAndDishesData,
  getRestaurantById,
  getRestaurantDishes,
};

export default RestaurantService;
