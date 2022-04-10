import ReactDOM from "react-dom";
import HomePage from "./HomePage";

describe("<HomePage />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
