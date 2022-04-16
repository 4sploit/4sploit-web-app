import ReactDOM from "react-dom";
import NotFoundPage from "./NotFoundPage";

describe("<NotFoundPage />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NotFoundPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
