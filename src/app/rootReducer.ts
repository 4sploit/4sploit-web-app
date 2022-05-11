import { combineReducers } from "@reduxjs/toolkit";
import { aboutMeReducer } from "features/AboutMe";
import { footerReducer } from "features/Footer";
import { headerReducer } from "features/Header";
import { pageMetadataReducer } from "features/PageMetadata";

const rootReducer = combineReducers({
  pageMetadata: pageMetadataReducer,
  header: headerReducer,
  footer: footerReducer,
  aboutMe: aboutMeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
