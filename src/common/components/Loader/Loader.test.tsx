import ReactDOM from "react-dom/client";
import Loader from "./Loader";

describe("<Loader />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Loader />);
  });
});
