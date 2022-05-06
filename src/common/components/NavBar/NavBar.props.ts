import { Link } from "src/common/types";

export interface NavBarProps {
  links: Array<Link>;
}

export const defaultProps: Partial<NavBarProps> = {};
