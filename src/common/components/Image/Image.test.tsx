import ReactDOM from "react-dom/client";
import Image from "./Image";

describe("<Image />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Image src="image.png" alt="image description" />);
  });
});
