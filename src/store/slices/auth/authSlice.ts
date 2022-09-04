import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { ILoginForm } from "./types";

interface IInitialState {
  isLoggedIn: boolean;
  loginFormType: ILoginForm;
}

const isLoggedJson = localStorage.getItem("login");

const INITIAL_STATE: IInitialState = {
  isLoggedIn: isLoggedJson ? JSON.parse(isLoggedJson) : false,
  loginFormType: "login",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      if (!action.payload) {
        localStorage.removeItem("token");
      } 
      
      localStorage.setItem("login", JSON.stringify(action.payload));
      state.isLoggedIn = action.payload;
    },
    setloginFormType(state, action: PayloadAction<ILoginForm>) {
      state.loginFormType = action.payload;
    },
  },
});

//selectors
export const isLoggedinSelector = (state: RootState) => state.authSlice.isLoggedIn;
export const loginFormTypeSelector = (state: RootState) => state.authSlice.loginFormType;

//actions
export const { setIsLoggedIn, setloginFormType } = authSlice.actions;

export default authSlice.reducer;
