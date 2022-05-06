import {
  GitHub,
  LinkedIn,
  SvgIconComponent as MaterialSvgIconComponent,
} from "@mui/icons-material";
import { FunctionComponent } from "react";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";
import { IconNames } from "../constants";

type SvgIconComponent =
  | FunctionComponent<React.SVGProps<SVGSVGElement>>
  | MaterialSvgIconComponent;

type Icons = {
  [iconName: string]: SvgIconComponent;
};

const Icons: Icons = {
  [IconNames.LinkedIn]: LinkedIn,
  [IconNames.Github]: GitHub,
  [IconNames.Logo]: Logo,
};

export default Icons;
