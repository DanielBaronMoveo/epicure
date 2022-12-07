import Restaurant from "../../interfaces/restaurant";
import * as ActionTypes from "./restaurant.action.types";

interface initialStateI {
  loading: boolean;
  restaurants?: Restaurant[] | null;
}

const initialState: initialStateI = {
  loading: false,
  restaurants: [],
};

export const restaurantReducer = (
  state: initialStateI = initialState,
  action: ActionTypes.RestaurantDispatchTypes
): initialStateI => {
  switch (action.type) {
    case ActionTypes.RESTAURANTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.RESTAURANTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};
