import { configureStore } from "@reduxjs/toolkit";
import { env } from "config";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { sagaMiddleware } from "store/middlewares";
import rootReducer, { RootState } from "store/rootReducer";

const store = configureStore({
  devTools: env.environment !== "production",
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
