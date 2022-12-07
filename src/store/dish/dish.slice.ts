import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "../../interfaces/dish";
import { getRestaurantsAndDishes } from "../restaurant/restaurant.action";

interface initialStateI {
  dishes: Dish[] | null;
}

const initialState: initialStateI = {
  dishes: null,
};

const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setDishes: (state, action) => {
      state.dishes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRestaurantsAndDishes.fulfilled, (state, action) => {
      state.dishes = action.payload.dishes;
    });
  },
});

export const dishActions = dishSlice.actions;
export default dishSlice.reducer;
