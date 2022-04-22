import ReactDOM from "react-dom/client";
import TemplateName from "./TemplateName";

describe("<TemplateName />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<TemplateName />);
  });
});
