import ReactDOM from "react-dom/client";
import Post from "./Post";

describe("<Post />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Post />);
  });
});
