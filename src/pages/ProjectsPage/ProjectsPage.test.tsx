import ReactDOM from "react-dom/client";
import ProjectsPage from "./ProjectsPage";

describe("<ProjectsPage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ProjectsPage />);
  });
});
