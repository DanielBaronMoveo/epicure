import RestaurantService from "../../services/restaurant.service";
import { Dispatch } from "redux";
import {
  ChefDispatchTypes,
  CHEF_FAIL,
  CHEF_LOADING,
  CHEF_SUCCESS,
  CHEFS_FAIL,
  CHEFS_LOADING,
  CHEFS_SUCCESS,
} from "./chef.action.types";
import ChefService from "../../services/chef.service";

export const getChef = (): any => {
  return async (dispatch: Dispatch<ChefDispatchTypes>) => {
    try {
      dispatch({ type: CHEF_LOADING });
      const chef = await ChefService.getChefData();
      dispatch({ type: CHEF_SUCCESS, payload: chef });
    } catch (error) {
      console.log(error);
      dispatch({ type: CHEF_FAIL });
    }
  };
};

export const getAllChefs = (): any => {
  return async (dispatch: Dispatch<ChefDispatchTypes>) => {
    try {
      dispatch({ type: CHEFS_LOADING });
      const chefs = await ChefService.getAllChefs();
      dispatch({ type: CHEFS_SUCCESS, payload: chefs });
    } catch (error) {
      console.log(error);
      dispatch({ type: CHEFS_FAIL });
    }
  };
};
