import { createSlice } from "@reduxjs/toolkit";
import { Chef } from "../../interfaces/chef";
import { getAllChefs, getChef } from "./chef.action";

interface initialStateI {
  chef?: Chef | null;
  chefs?: Chef[] | null;
}

const initialState: initialStateI = {
  chef: null,
  chefs: null,
};

const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {
    setChefs: (state, action) => {
      state.chefs = action.payload;
    },
    setChef: (state, action) => {
      state.chef = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChef.fulfilled, (state, action) => {
      state.chef = action.payload;
    });
    builder.addCase(getAllChefs.fulfilled, (state, action) => {
      state.chefs = action.payload;
    });
  },
});

export const chefActions = chefSlice.actions;
export default chefSlice.reducer;
