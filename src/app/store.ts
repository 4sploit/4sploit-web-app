import { configureStore } from "@reduxjs/toolkit";
import { env } from "src/config";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: env.environment !== "production",
});

export type AppDispatch = typeof store.dispatch;

export default store;
