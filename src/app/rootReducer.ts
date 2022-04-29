import { combineReducers } from "@reduxjs/toolkit";
// eslint-disable-next-line max-len
import pageMetadataReducer from "src/features/PageMetadata/PageMetadata.slice";

const rootReducer = combineReducers({
  pageMetadata: pageMetadataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
