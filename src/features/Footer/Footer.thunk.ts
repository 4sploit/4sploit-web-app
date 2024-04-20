import { createAsyncThunk } from "@reduxjs/toolkit";
import { ioContainer } from "config";
import { Types } from "config/ioc";
import FooterApi from "features/Footer/Footer.api";

const getFooterData = createAsyncThunk(
  "footer/getFooterData",
  async (_, { rejectWithValue }) => {
    const footerApi = ioContainer.get<FooterApi>(Types.FooterApi);
    const response = await footerApi.getFooterData();

    if (response.isSuccess) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  },
);

export default getFooterData;
