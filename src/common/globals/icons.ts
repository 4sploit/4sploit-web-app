import {
  GitHub,
  LinkedIn,
  SvgIconComponent as MaterialSvgIconComponent,
} from "@mui/icons-material";
import { FunctionComponent } from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";

enum IconNames {
  LinkedIn = "linkedIn",
  Github = "github",
  Logo = "logo",
}

type SvgIconComponent =
  | FunctionComponent<React.SVGProps<SVGSVGElement>>
  | MaterialSvgIconComponent;

type Icons = {
  [iconName in IconNames]: SvgIconComponent;
};

const Icons: Icons = {
  [IconNames.LinkedIn]: LinkedIn,
  [IconNames.Github]: GitHub,
  [IconNames.Logo]: Logo,
};

export { Icons, IconNames };
