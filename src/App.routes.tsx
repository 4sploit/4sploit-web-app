import { Route } from "react-router-dom";
import { AppLayout } from "./layouts";
import {
  BlogPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
  ToolsPage,
  UnderConstructionPage,
} from "./pages";

export const appRoutes = (
  <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/tools" element={<ToolsPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);

export const underConstructionRoutes = (
  <Route path="*" element={<UnderConstructionPage />} />
);
