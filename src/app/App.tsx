import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { appRoutes, comingSoonRoute } from "./App.routes";
import { HelmetProvider } from "react-helmet-async";
import { AppTheme, GlobalStyle } from "src/common/styles";
import { env } from "src/config";
import { Provider } from "react-redux";
import store from "./store";
import { PageMetadata } from "src/features/PageMetadata";

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <PageMetadata />
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
    </Provider>
  );
};

export default App;
