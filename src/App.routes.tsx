import { PublicRoute } from "./components/PublicRoute";
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
  <PublicRoute element={<AppLayout />}>
    <PublicRoute path="/" element={<HomePage />} />
    <PublicRoute path="/blog" element={<BlogPage />} />
    <PublicRoute path="/tools" element={<ToolsPage />} />
    <PublicRoute path="/projects" element={<ProjectsPage />} />
    <PublicRoute path="*" element={<NotFoundPage />} />
  </PublicRoute>
);

export const underConstructionRoutes = (
  <PublicRoute path="*" element={<UnderConstructionPage />} />
);
