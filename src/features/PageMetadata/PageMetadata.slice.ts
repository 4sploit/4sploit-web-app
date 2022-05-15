import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Metadata } from "common/types";

const defaultMetadata: Metadata = {
  title: "",
  description: "My Personal Web Application",
};

const initialState = {
  metdata: defaultMetadata,
};

const pageMetadataSlice = createSlice({
  name: "pageMetadata",
  initialState,
  reducers: {
    setMetadata(state, action: PayloadAction<Metadata>) {
      state.metdata = { ...action.payload };
    },
  },
});

export const { setMetadata } = pageMetadataSlice.actions;
export default pageMetadataSlice.reducer;
