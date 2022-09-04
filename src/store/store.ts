import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { mainApi } from "api/main/mainApi";
import authSlice from "./slices/auth/authSlice";
import linksSlice from "./slices/links/linksSlice";


export const store = configureStore({
  reducer: {
    authSlice,
    linksSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
