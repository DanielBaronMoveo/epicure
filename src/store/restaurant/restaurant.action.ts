import RestaurantService from "../../services/restaurant.service";
import { Dispatch } from "redux";
import {
  RestaurantDispatchTypes,
  RESTAURANTS_FAIL,
  RESTAURANTS_LOADING,
  RESTAURANTS_SUCCESS,
} from "./restaurant.action.types";
import { DishesDispatchTypes, DISHES_SUCCESS } from "../dish/dish.action.types";

export const getRestaurantsAndDishes = (): any => {
  return async (
    dispatch: Dispatch<RestaurantDispatchTypes | DishesDispatchTypes>
  ) => {
    try {
      dispatch({ type: RESTAURANTS_LOADING });
      const [restaurants, dishes] =
        await RestaurantService.getRestaurantsAndDishesData();
      dispatch({ type: RESTAURANTS_SUCCESS, payload: restaurants });
      dispatch({ type: DISHES_SUCCESS, payload: dishes });
    } catch (error) {
      console.log(error);
      dispatch({ type: RESTAURANTS_FAIL });
    }
  };
};
