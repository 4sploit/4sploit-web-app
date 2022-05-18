import { configureStore } from "@reduxjs/toolkit";
import { sagaMiddleware } from "app/middlewares";
import { env } from "config";
import rootReducer from "./rootReducer";

export const store = configureStore({
  devTools: env.environment !== "production",
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export type AppDispatch = typeof store.dispatch;

export default store;
