import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Link } from "src/common/types";

interface Header {
  links: Array<Link>;
}

const initialState: Header = {
  links: [
    { id: "1", title: "Home", url: "/" },
    { id: "2", title: "projects", url: "projects" },
    { id: "3", title: "blog", url: "blog" },
  ],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    addLink(state, action: PayloadAction<Link>) {
      state.links.push(action.payload);
    },
    deleteLink(state, action: PayloadAction<Link>) {
      const filteredLinks = state.links.filter(
        (link) => link.id !== action.payload.id
      );
      state.links = filteredLinks;
    },
  },
});

export const { addLink, deleteLink } = headerSlice.actions;
export default headerSlice.reducer;
