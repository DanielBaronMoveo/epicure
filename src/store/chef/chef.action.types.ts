import { Chef } from "../../interfaces/chef";

export const CHEF_LOADING = "CHEF_LOADING";
export const CHEF_FAIL = "CHEF_FAIL";
export const CHEF_SUCCESS = "CHEF_SUCCESS";

export interface ChefLoading {
  type: typeof CHEF_LOADING;
}

export interface ChefFail {
  type: typeof CHEF_FAIL;
}

export interface ChefSuccess {
  type: typeof CHEF_SUCCESS;
  payload: Chef;
}

export const CHEFS_LOADING = "CHEFS_LOADING";
export const CHEFS_FAIL = "CHEFS_FAIL";
export const CHEFS_SUCCESS = "CHEFS_SUCCESS";

export interface ChefsLoading {
  type: typeof CHEFS_LOADING;
}

export interface ChefsFail {
  type: typeof CHEFS_FAIL;
}

export interface ChefsSuccess {
  type: typeof CHEFS_SUCCESS;
  payload: Chef[];
}

export type ChefDispatchTypes =
  | ChefLoading
  | ChefFail
  | ChefSuccess
  | ChefsLoading
  | ChefsFail
  | ChefsSuccess;
