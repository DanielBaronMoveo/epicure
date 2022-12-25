import { createAsyncThunk } from "@reduxjs/toolkit";
import CartService from "../../services/cart.service";

// loader will show up and disappear after 5 seconds
export const submitOrder = createAsyncThunk(
  "order/submitOrder",
  async (order: boolean, { dispatch }) => {
    try {
      const response = await CartService.submitOrder();
      console.log(response);

      // dispatch(setOrder(response.data));
      setTimeout(() => {
        // dispatch(setOrder(null));
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  }
);
