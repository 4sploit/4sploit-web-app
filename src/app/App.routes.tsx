import { Navigate, Route } from "react-router-dom";
import { AppLayout, LazyLayout } from "src/common/layouts";
import {
  NotFoundPage,
  ComingSoonPage,
  LazyHomePage,
  LazyBlogPage,
  LazyProjectsPage,
} from "src/pages";

export const appRoutes = (
  <Route element={<AppLayout />}>
    <Route element={<LazyLayout />}>
      <Route path="/" element={<LazyHomePage />} />
      <Route path="/blog" element={<LazyBlogPage />} />
      <Route path="/projects" element={<LazyProjectsPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);

export const comingSoonRoute = (
  <>
    <Route path="/" element={<ComingSoonPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </>
);
