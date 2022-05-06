import { createTheme, Theme } from "@mui/material";

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
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
