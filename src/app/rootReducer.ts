import { combineReducers } from "@reduxjs/toolkit";
import { footerReducer } from "features/Footer";
import { headerReducer } from "features/Header";
import { pageMetadataReducer } from "features/PageMetadata";

const rootReducer = combineReducers({
  pageMetadata: pageMetadataReducer,
  header: headerReducer,
  footer: footerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
