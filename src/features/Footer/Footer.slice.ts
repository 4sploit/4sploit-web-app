import { createSlice } from "@reduxjs/toolkit";
import { IconNames } from "common/globals";
import { Targets } from "common/types";
import { Link } from "common/models";
import { env } from "config";

interface Footer {
  ownerName: string;
  externalLinks: Array<Link>;
}

const initialState: Footer = {
  ownerName: env.ownerName ?? "",
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
