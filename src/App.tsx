import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { appRoutes, underConstructionRoutes } from "./App.routes";
import env from "./environment";
import { AppTheme, GlobalStyle } from "./styles";

const App = () => {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {env.isUnderConstruction ? appRoutes : underConstructionRoutes}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
