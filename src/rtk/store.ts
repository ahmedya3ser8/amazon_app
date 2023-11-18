import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";
import favoriteReducer from "./slices/favoriteReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch