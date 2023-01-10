import { createSlice } from "@reduxjs/toolkit";

interface ErrorState {
  errorMessage: string | null;
  show: boolean;
}

const initialState: ErrorState = {
  errorMessage: null,
  show: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errorMessage = action.payload;
      state.show = true;
    },
    clearError: (state) => {
      state.errorMessage = null;
      state.show = false;
    },
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
