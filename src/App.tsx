import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { appRoutes, comingSoonRoute } from "./App.routes";
import { HelmetProvider } from "react-helmet-async";
import { AppTheme, GlobalStyle } from "common/styles";
import { env } from "config";
import { Provider } from "react-redux";
import { PageMetadata } from "features/PageMetadata";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { store } from "store";

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <PageMetadata />
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={AppTheme}>
            <ThemeProvider theme={AppTheme}>
              <CssBaseline />
              <GlobalStyle />
              <BrowserRouter>
                <Routes>
                  {env.isUnderConstruction ? comingSoonRoute : appRoutes}
                </Routes>
              </BrowserRouter>
            </ThemeProvider>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </HelmetProvider>
    </Provider>
  );
};

export default App;
