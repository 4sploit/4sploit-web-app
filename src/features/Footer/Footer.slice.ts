import { createSlice } from "@reduxjs/toolkit";
import { IconNames } from "src/common/styles";
import { Link, Targets } from "src/common/types";

interface Footer {
  externalLinks: Array<Link>;
}

const initialState: Footer = {
  externalLinks: [
    {
      id: "1",
      title: "linkedin",
      url: "https://linkedin.com/in/4sploit",
      icon: IconNames.LinkedIn,
      target: Targets.Blank,
    },
    {
      id: "2",
      title: "github",
      url: "https://github.com/4sploit",
      icon: IconNames.Github,
      target: Targets.Blank,
    },
  ],
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export default footerSlice.reducer;
