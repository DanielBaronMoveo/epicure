import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dishReducer from "./dish/dish.slice";
import restaurantReducer from "./restaurant/restaurant.slice";
import chefReducer from "./chef/chef.slice";
import cartReducer from "./cart/cart.slice";
import errorReducer from "./error/error.slice";
import authReducer from "./auth/auth.slice";

const rootReducer = combineReducers({
  dishes: dishReducer,
  restaurants: restaurantReducer,
  chef: chefReducer,
  cart: cartReducer,
  error: errorReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
