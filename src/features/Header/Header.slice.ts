import { createSlice } from "@reduxjs/toolkit";
import { Link } from "common/types";

interface Header {
  links: Array<Link>;
}

const initialState: Header = {
  links: [
    { id: "1", title: "projects", url: "projects" },
    { id: "2", title: "blog", url: "blog" },
  ],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
});

export default headerSlice.reducer;
