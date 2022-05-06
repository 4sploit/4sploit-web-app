import { Facebook } from "@mui/icons-material";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";

describe("<NavBar />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<NavBar logo={<Facebook />} links={[]} />);
  });
});
