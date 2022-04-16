import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts";
import {
  BlogPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
  ToolsPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
