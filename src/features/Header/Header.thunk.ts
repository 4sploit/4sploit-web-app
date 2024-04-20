import { createAsyncThunk } from "@reduxjs/toolkit";
import { ioContainer } from "config";
import { Types } from "config/ioc";
import HeaderApi from "features/Header/Header.api";

const getHeaderData = createAsyncThunk(
  "header/getHeaderData",
  async (_, { rejectWithValue }) => {
    const headerApi = ioContainer.get<HeaderApi>(Types.HeaderApi);
    const response = await headerApi.getHeaderData();

    if (response.isSuccess) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  },
);

export default getHeaderData;
