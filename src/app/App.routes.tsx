import { Route } from "react-router-dom";
import { AppLayout } from "../common/layouts";
import {
  BlogPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
  ComingSoonPage,
} from "../pages";

export const appRoutes = (
  <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);

export const comingSoonRoute = (
  <Route path="*" element={<ComingSoonPage />} />
);
