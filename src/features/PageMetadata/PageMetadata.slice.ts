import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Metadata } from "common/types";

const defaultMetadata: Metadata = {
  title: "",
  description: "My Personal Web Application",
};

const initialState = {
  metadata: defaultMetadata,
};

const pageMetadataSlice = createSlice({
  name: "pageMetadata",
  initialState,
  reducers: {
    setMetadata(state, action: PayloadAction<Metadata>) {
      state.metadata = { ...action.payload };
    },
  },
});

export const { setMetadata } = pageMetadataSlice.actions;
export default pageMetadataSlice.reducer;
