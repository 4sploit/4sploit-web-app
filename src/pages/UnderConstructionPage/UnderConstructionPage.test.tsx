import ReactDOM from "react-dom";
import UnderConstructionPage from "./UnderConstructionPage";

describe("<UnderConstructionPage />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UnderConstructionPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
