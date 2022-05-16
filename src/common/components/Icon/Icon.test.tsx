import { IconNames } from "common/globals";
import ReactDOM from "react-dom/client";
import Icon from "./Icon";

describe("<Icon />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Icon icon={IconNames.LinkedIn} />);
  });
});
