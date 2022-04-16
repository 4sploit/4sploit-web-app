import ReactDOM from "react-dom";
import BlogPage from "./BlogPage";

describe("<BlogPage />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlogPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
