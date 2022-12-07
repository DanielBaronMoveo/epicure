import { createAsyncThunk } from "@reduxjs/toolkit";

import ChefService from "../../services/chef.service";

export const getChef = createAsyncThunk("chef/getChef", async () => {
  try {
    const chef = await ChefService.getChefData();
    return chef;
  } catch (error) {
    console.log(error);
  }
});

export const getAllChefs = createAsyncThunk("chef/getAllChefs", async () => {
  try {
    const chefs = await ChefService.getAllChefs();
    return chefs;
  } catch (error) {
    console.log(error);
  }
});
