import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./Api/baseApi";
import cartReducer from "@/Redux/features/cart/cartSlice";


// Persist Config
const persistConfig = {
  key: "auth", 
  storage,     
};

// Persisted Auth Reducer
const persistAuthReducer = persistReducer(persistConfig, authReducer);
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Configure Store
export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    // products: productsReducer,
    carts: persistedReducer,
    [baseApi.reducerPath]: baseApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware), 
});


export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;