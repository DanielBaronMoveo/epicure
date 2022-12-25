import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces/cart";

interface initialStateI {
  items: CartItem[];
  total: number;
  quantity: number;
  isOrder: boolean;
}

const initialState: initialStateI = {
  items: [],
  total: 0,
  quantity: 0,
  isOrder: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const exisitngItem = state.items.find(
        (item) => item.dish._id === newItem.dish._id
      );
      if (exisitngItem) {
        exisitngItem.quantity += newItem.quantity;
        state.quantity += 1;
        state.total += newItem.dish.price * newItem.quantity;
      } else {
        state.items.push(newItem);
        state.quantity += newItem.quantity;
        state.total += newItem.dish.price * newItem.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const item = state.items.find(
        (item) => item.dish._id === action.payload.dish._id
      );
      state.quantity -= 1;
      state.total -= item?.dish.price;
      state.items = state.items.filter(
        (item) => item.dish._id !== action.payload.dish._id
      );
    },
    submitOrderToggler: (state) => {
      state.isOrder = !state.isOrder;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
