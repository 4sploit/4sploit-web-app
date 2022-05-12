import { IconNames } from "common/globals";
import ReactDOM from "react-dom/client";
import IconButton from "./IconButton";

describe("<IconButton />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<IconButton icon={IconNames.Github} />);
  });
});
