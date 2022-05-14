import { createTheme, Theme } from "@mui/material";
import { Colors } from "common/globals";

export const AppTheme: Theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: 15,
    allVariants: {
      color: Colors.WhiteSmoke,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
