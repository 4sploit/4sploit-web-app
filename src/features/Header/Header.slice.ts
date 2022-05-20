import { createSlice } from "@reduxjs/toolkit";
import { IconNames } from "common/globals";
import { Link } from "common/models";

interface Header {
  logo: IconNames;
  links: Array<Link>;
}

const initialState: Header = {
  logo: IconNames.Logo,
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
