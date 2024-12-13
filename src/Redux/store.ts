import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import { baseApi } from "./Api/baseApi";
import cartReducer from "./features/products/cardSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;