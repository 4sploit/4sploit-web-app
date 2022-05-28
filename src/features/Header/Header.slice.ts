import { ApiStatus } from "common/constants";
import { HeaderData } from "common/models";
import { ApiState } from "common/types";
import getHeaderData from "features/Header/Header.thunk";
import { createApiSlice } from "store/slices";

const initialState: ApiState<HeaderData> = {
  status: ApiStatus.Idle,
};

const headerSlice = createApiSlice({
  name: "header",
  initialState,
  reducers: {},
  thunk: getHeaderData,
});

export default headerSlice.reducer;
