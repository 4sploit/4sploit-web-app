import {
  AsyncThunk,
  createSlice,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from "@reduxjs/toolkit";
import { ApiStatus } from "common/constants";
import { ApiState } from "common/types";
import { castDraft } from "immer";

const createApiSlice = <
  T,
  Reducers extends SliceCaseReducers<ApiState<T>>
>({
  name = "",
  initialState,
  reducers,
  thunk,
}: {
  name: string;
  initialState: ApiState<T>;
  reducers: ValidateSliceCaseReducers<ApiState<T>, Reducers>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  thunk: AsyncThunk<T, void, {}>;
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      ...reducers,
    },
    extraReducers: (builder) => {
      builder.addCase(thunk.pending, (state, action) => {
        state.status = ApiStatus.Loading;
        state.data = action.payload;
      });

      builder.addCase(thunk.fulfilled, (state, action) => {
        state.status = ApiStatus.Succeeded;
        state.data = castDraft(action.payload);
      });

      builder.addCase(thunk.rejected, (state, action) => {
        state.status = ApiStatus.Failed;
        state.error = action.error;
      });
    },
  });
};

export default createApiSlice;
