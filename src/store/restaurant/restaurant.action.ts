import RestaurantService from "../../services/restaurant.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Restaurant from "../../interfaces/restaurant";
import { Dish } from "../../interfaces/dish";

export const getRestaurantsAndDishes = createAsyncThunk(
  "restaurants/getRestaurantsAndDishes",
  async () => {
    const [restaurants, dishes]: [Restaurant[], Dish[]] =
      await RestaurantService.getRestaurantsAndDishesData();
    return { restaurants, dishes };
  }
);
