import ReactDOM from "react-dom/client";
import CodeBlock from "./CodeBlock";

describe("<CodeBlock />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<CodeBlock>some code</CodeBlock>);
  });
});
