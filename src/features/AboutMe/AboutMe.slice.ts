import { createSlice } from "@reduxjs/toolkit";
import { FileNames, Files, ImageNames, Images } from "common/globals";
import { Link, Targets } from "common/types";
import { env } from "config";

interface AboutMe {
  photo: string;
  name: string;
  speciality: string;
  description: string;
  actions: Array<Link>;
}

const initialState: AboutMe = {
  photo: Images[ImageNames.Photo],
  name: env.ownerName || "",
  speciality: "Full Stack Developer",
  description:
    "Well-qualified Full Stack Developer " +
    "familiar with a wide range of technologies and " +
    "programming languages, " +
    "Knowledgeable of backend and frontend development requirements, " +
    "Able to handle any part of the process with ease, " +
    "Collaborative team player " +
    "with excellent technical abilities offering more than 4 years " +
    "of related experience.",
  actions: [
    {
      id: "1",
      title: "download CV",
      url: Files[FileNames.CV],
      target: Targets.Blank,
      isExternal: true,
    },
    {
      id: "2",
      title: "contact",
      url: "tel:+972502891914",
      target: Targets.Blank,
      isExternal: true,
    },
  ],
};

const AboutMeSlice = createSlice({
  name: "AboutMe",
  initialState,
  reducers: {},
});

export default AboutMeSlice.reducer;
