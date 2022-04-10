import ReactDOM from "react-dom";
import ProjectsPage from "./ProjectsPage";

describe("<ProjectsPage />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProjectsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
