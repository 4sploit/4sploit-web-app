import { ReactNode } from "react";
import { Targets } from "common/types";

export interface LinkProps {
  id?: string;
  className?: string;
  url: string;
  target?: Targets;
  children: ReactNode;
  isExternal?: boolean;
}

export const defaultProps: Partial<LinkProps> = {};
