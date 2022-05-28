import { ApiStatus } from "common/constants";
import { AboutData } from "common/models";
import { createApiSlice } from "store/slices";
import getAboutData from "features/AboutMe/AboutMe.thunk";
import { ApiState } from "common/types";
import { FileNames, Files, ImageNames, Images } from "common/globals";

const initialState: ApiState<AboutData> = {
  status: ApiStatus.Idle,
};

const aboutMeSlice = createApiSlice({
  name: "footer",
  initialState,
  reducers: {
    mapAboutData: (state) => {
      const { data } = state;

      if (data) {
        state.data = {
          ...data,
          photo: Images[data.photo as ImageNames],
          actions: data.actions.map((action) => ({
            ...action,
            url:
              action.url in Files
                ? Files[action.url as FileNames]
                : action.url,
          })),
        };
      }
    },
  },
  thunk: getAboutData,
});

export const { mapAboutData } = aboutMeSlice.actions;
export default aboutMeSlice.reducer;
