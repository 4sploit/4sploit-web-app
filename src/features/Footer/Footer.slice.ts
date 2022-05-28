import { ApiStatus } from "common/constants";
import { FooterData } from "common/models";
import { ApiState } from "common/types";
import getFooterData from "features/Footer/Footer.thunk";
import { createApiSlice } from "store/slices";

const initialState: ApiState<FooterData> = {
  status: ApiStatus.Idle,
};

const footerSlice = createApiSlice({
  name: "footer",
  initialState,
  reducers: {},
  thunk: getFooterData,
});

export default footerSlice.reducer;
