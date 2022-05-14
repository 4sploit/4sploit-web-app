import { ReactNode } from "react";
import { Targets } from "common/types";
import { LinkTypes } from "common/components/Link/constants";

export interface LinkProps {
  id?: string;
  className?: string;
  url: string;
  target?: Targets;
  children: ReactNode;
  linkType?: LinkTypes;
}

export const defaultProps: Partial<LinkProps> = {
  linkType: LinkTypes.Internal,
};
