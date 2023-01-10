import RestaurantService from "../../services/restaurant.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Restaurant from "../../interfaces/restaurant";
import { Dish } from "../../interfaces/dish";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { errorActions } from "../error/error.slice";

export const getRestaurantsAndDishes = createAsyncThunk(
  "restaurants/getRestaurantsAndDishes",
  async () => {
    // try {
    const [restaurants, dishes]: [Restaurant[], Dish[]] =
      await RestaurantService.getRestaurantsAndDishesData();
    return { restaurants, dishes };
    // } catch (error) {
    //   // dispatch(errorActions.setError(error));
    //   console.log(error);
    // }
  }
);
