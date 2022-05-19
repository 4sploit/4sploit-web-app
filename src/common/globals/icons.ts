import {
  Error,
  GitHub,
  Home,
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
  Menu = "MENU",
  Home = "HOME",
  Error = "ERROR",
}

type SvgIconComponent =
  | FunctionComponent<React.SVGProps<SVGSVGElement>>
  | MaterialSvgIconComponent;

type Icons = Record<IconNames, SvgIconComponent>;

const Icons: Icons = {
  [IconNames.LinkedIn]: LinkedIn,
  [IconNames.Github]: GitHub,
  [IconNames.Logo]: Logo,
  [IconNames.Phone]: Phone,
  [IconNames.Menu]: Menu,
  [IconNames.Home]: Home,
  [IconNames.Error]: Error,
};

export { Icons, IconNames };
