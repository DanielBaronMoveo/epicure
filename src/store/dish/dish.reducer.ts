import { Dish } from "../../interfaces/dish";
import {
  DishesDispatchTypes,
  DISHES_FAIL,
  DISHES_LOADING,
  DISHES_SUCCESS,
} from "./dish.action.types";

interface initialStateI {
  loading: boolean;
  dishes?: Dish[] | [];
}

const initialState: initialStateI = {
  loading: false,
  dishes: [],
};

export const dishReducer = (
  state: initialStateI = initialState,
  action: DishesDispatchTypes
) => {
  switch (action.type) {
    case DISHES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case DISHES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DISHES_SUCCESS:
      return {
        ...state,
        loading: false,
        dishes: action.payload,
      };
    default:
      return state;
  }
};
