import { createAsyncThunk } from "@reduxjs/toolkit";
import DishService from "../../services/dish.service";

export const getDishes = createAsyncThunk("dishes/getDishes", async () => {
  try {
    const dishes = await DishService.fetchDishes();
    return dishes;
  } catch (error) {
    console.log(error);
  }
});
