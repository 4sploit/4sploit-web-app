import { combineReducers } from "@reduxjs/toolkit";
import { headerReducer } from "src/features/Header";
import { pageMetadataReducer } from "src/features/PageMetadata";

const rootReducer = combineReducers({
  pageMetadata: pageMetadataReducer,
  header: headerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
