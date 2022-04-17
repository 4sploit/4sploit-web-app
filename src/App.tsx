import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import env from "./environment";
import { AppLayout } from "./layouts";
import {
  BlogPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
  ToolsPage,
  UnderConstructionPage,
} from "./pages";
import { AppTheme, GlobalStyle } from "./styles";

const App = () => {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {env.isUnderConstruction
              ? renderUnderConstructionRoute()
              : renderAppRoutes()}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

const renderAppRoutes = () => {
  return (
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  );
};

const renderUnderConstructionRoute = () => {
  return <Route path="*" element={<UnderConstructionPage />} />;
};

export default App;
