import { Link } from "common/models";
import { IconNames } from "common/globals";

export interface NavBarProps {
  logo: IconNames;
  links?: Array<Link>;
}

export const defaultProps: Partial<NavBarProps> = {};
