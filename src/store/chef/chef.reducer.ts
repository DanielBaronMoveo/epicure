import { Chef } from "../../interfaces/chef";
import {
  ChefDispatchTypes,
  CHEF_FAIL,
  CHEF_LOADING,
  CHEF_SUCCESS,
  CHEFS_FAIL,
  CHEFS_LOADING,
  CHEFS_SUCCESS,
} from "./chef.action.types";

interface initialStateI {
  loading: boolean;
  chef?: Chef | null;
  chefs?: Chef[] | null;
}

const initialState: initialStateI = {
  loading: false,
  chef: null,
  chefs: null,
};

export const chefReducer = (
  state: initialStateI = initialState,
  action: ChefDispatchTypes
) => {
  switch (action.type) {
    case CHEF_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CHEF_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHEF_SUCCESS:
      return {
        ...state,
        loading: false,
        chef: action.payload,
      };
    case CHEFS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CHEFS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHEFS_SUCCESS:
      return {
        ...state,
        loading: false,
        chefs: action.payload,
      };
    default:
      return state;
  }
};
