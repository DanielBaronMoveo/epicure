import { Dish } from "../../interfaces/dish";

export const DISHES_LOADING = "DISHES_LOADING";
export const DISHES_FAIL = "DISHES_FAIL";
export const DISHES_SUCCESS = "DISHES_SUCCESS";

export interface DishesLoading {
  type: typeof DISHES_LOADING;
}

export interface DishesFail {
  type: typeof DISHES_FAIL;
}

export interface DishesSuccess {
  type: typeof DISHES_SUCCESS;
  payload: Dish[];
}

export type DishesDispatchTypes = DishesLoading | DishesFail | DishesSuccess;
