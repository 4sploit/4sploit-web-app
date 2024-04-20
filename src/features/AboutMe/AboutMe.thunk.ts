import { createAsyncThunk } from "@reduxjs/toolkit";
import { ioContainer } from "config";
import { Types } from "config/ioc";
import AboutApi from "features/AboutMe/AboutMe.api";

const getAboutData = createAsyncThunk(
  "about/getAboutData",
  async (_, { rejectWithValue }) => {
    const aboutApi = ioContainer.get<AboutApi>(Types.AboutApi);
    const response = await aboutApi.getAboutData();

    if (response.isSuccess) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  },
);

export default getAboutData;
