// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import thunk from "redux-thunk";

// import { dishReducer } from "./dish/dish.reducer";
// import { restaurantReducer } from "./restaurant/restaurant.reducer";
// import { chefReducer } from "./chef/chef.reducer";

// const rootReducer = combineReducers({
//   dishes: dishReducer,
//   restaurants: restaurantReducer,
//   chef: chefReducer,
// });

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// export type RootStore = ReturnType<typeof rootReducer>;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dishReducer from "./dish/dish.slice";
import restaurantReducer from "./restaurant/restaurant.slice";
import chefReducer from "./chef/chef.slice";

const rootReducer = combineReducers({
  dishes: dishReducer,
  restaurants: restaurantReducer,
  chef: chefReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
