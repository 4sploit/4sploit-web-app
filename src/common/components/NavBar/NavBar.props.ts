import { ReactNode } from "react";
import { Link } from "src/common/types";

export interface NavBarProps {
  logo: ReactNode;
  links: Array<Link>;
}

export const defaultProps: Partial<NavBarProps> = {};
