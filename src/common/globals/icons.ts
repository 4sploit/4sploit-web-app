import {
  GitHub,
  LinkedIn,
  Menu,
  Phone,
  SvgIconComponent as MaterialSvgIconComponent,
} from "@mui/icons-material";
import { FunctionComponent } from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";

enum IconNames {
  LinkedIn = "LINKEDIN",
  Github = "GITHUB",
  Logo = "LOGO",
  Phone = "PHONE",
  Menu = "Menu",
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
  [IconNames.Phone]: Phone,
  [IconNames.Menu]: Menu,
};

export { Icons, IconNames };
