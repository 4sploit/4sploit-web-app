import { IconNames } from "common/globals";
import ReactDOM from "react-dom/client";
import IconLink from "./IconLink";

describe("<IconLink />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<IconLink url="/test" icon={IconNames.LinkedIn} />);
  });
});
