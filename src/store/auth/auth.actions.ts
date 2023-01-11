// Compare this snippet from src/store/restaurant/restaurant.actions.ts:
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";
import { authActions } from "./auth.slice";

export const login = createAsyncThunk(
  "auth/login",
  async (authData: { email: string; password: string }, { dispatch }) => {
    try {
      const response = await AuthService.login(
        authData.email,
        authData.password
      );
      dispatch(authActions.login(response));
      localStorage.setItem("user", JSON.stringify(response));

      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (authData: { email: string; password: string }, { dispatch }) => {
    try {
      const response = await AuthService.signup(
        authData.email,
        authData.password
      );
      dispatch(authActions.signup(response));
      localStorage.setItem("user", JSON.stringify(response));

      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
