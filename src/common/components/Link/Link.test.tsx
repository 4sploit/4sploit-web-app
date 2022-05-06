import ReactDOM from "react-dom/client";
import Link from "./Link";

describe("<Link />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Link url="/test">test</Link>);
  });
});
