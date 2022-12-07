import { createSlice } from "@reduxjs/toolkit";
import Restaurant from "../../interfaces/restaurant";
import { getRestaurantsAndDishes } from "./restaurant.action";

interface initialStateI {
  restaurants: Restaurant[] | null;
}

const initialState: initialStateI = {
  restaurants: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRestaurantsAndDishes.fulfilled, (state, action) => {
      state.restaurants = action.payload.restaurants;
    });
  },
});

export const restaurantActions = restaurantSlice.actions;
export default restaurantSlice.reducer;
