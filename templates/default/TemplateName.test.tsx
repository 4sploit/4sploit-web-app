import React from "react";
import ReactDOM from "react-dom";
import TemplateName from "./TemplateName";

describe("<TemplateName />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TemplateName />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
