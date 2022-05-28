import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { env } from "config";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import rootReducer from "store/rootReducer";

const store = configureStore({
  devTools: env.environment !== "production",
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, unknown, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> =
  useSelector;

export default store;
