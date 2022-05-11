import { createSlice } from "@reduxjs/toolkit";
import { IconNames } from "common/globals";
import { Link, Targets } from "common/types";

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
      isExternal: true,
    },
    {
      id: "2",
      title: "github",
      url: "https://github.com/4sploit",
      icon: IconNames.Github,
      target: Targets.Blank,
      isExternal: true,
    },
    {
      id: "3",
      title: "phone",
      url: "tel:+972502891914",
      icon: IconNames.Phone,
      target: Targets.Blank,
      isExternal: true,
    },
  ],
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export default footerSlice.reducer;
