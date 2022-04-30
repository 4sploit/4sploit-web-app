import { combineReducers } from "@reduxjs/toolkit";
import { pageMetadataReducer } from "src/features/PageMetadata";

const rootReducer = combineReducers({
  pageMetadata: pageMetadataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
