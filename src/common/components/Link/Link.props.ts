import { ReactNode } from "react";
import { Targets } from "./constants";

export interface LinkProps {
  id?: string;
  className?: string;
  url: string;
  target?: Targets;
  children: ReactNode;
}

export const defaultProps: Partial<LinkProps> = {};
