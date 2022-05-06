import { combineReducers } from "@reduxjs/toolkit";
import { footerReducer } from "src/features/Footer";
import { headerReducer } from "src/features/Header";
import { pageMetadataReducer } from "src/features/PageMetadata";

const rootReducer = combineReducers({
  pageMetadata: pageMetadataReducer,
  header: headerReducer,
  footer: footerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
