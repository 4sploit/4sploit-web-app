import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { appRoutes, comingSoonRoute } from "./App.routes";
import env from "./environment";
import { AppTheme, GlobalStyle } from "./styles";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <MuiThemeProvider theme={AppTheme}>
        <ThemeProvider theme={AppTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              {env.isUnderConstruction ? comingSoonRoute : appRoutes}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </HelmetProvider>
  );
};

export default App;
