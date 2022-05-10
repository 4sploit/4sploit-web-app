import ReactDOM from "react-dom/client";
import AboutMe from "./AboutMe";

describe("<AboutMe />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<AboutMe />);
  });
});
