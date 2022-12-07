import Restaurant from "../../interfaces/restaurant";

export const RESTAURANTS_LOADING = "RESTAURANTS_LOADING";
export const RESTAURANTS_FAIL = "RESTAURANTS_FAIL";
export const RESTAURANTS_SUCCESS = "RESTAURANTS_SUCCESS";

export interface RestaurantsLoading {
  type: typeof RESTAURANTS_LOADING;
}

export interface RestaurantsFail {
  type: typeof RESTAURANTS_FAIL;
}

export interface RestaurantsSuccess {
  type: typeof RESTAURANTS_SUCCESS;
  payload: Restaurant[];
}

export type RestaurantDispatchTypes =
  | RestaurantsLoading
  | RestaurantsFail
  | RestaurantsSuccess;
