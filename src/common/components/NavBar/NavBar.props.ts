import { SvgIconComponent } from "@mui/icons-material";
import { FunctionComponent } from "react";
import { Link } from "src/common/types";

export interface NavBarProps {
  Logo:
    | FunctionComponent<React.SVGProps<SVGSVGElement>>
    | SvgIconComponent;
  links: Array<Link>;
}

export const defaultProps: Partial<NavBarProps> = {};
