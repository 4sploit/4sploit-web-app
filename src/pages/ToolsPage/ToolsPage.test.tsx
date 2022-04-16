import ReactDOM from "react-dom";
import ToolsPage from "./ToolsPage";

describe("<ToolsPage />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ToolsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
