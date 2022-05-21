import { ReactNode } from "react";
import { Targets } from "common/constants";
import { LinkTypes } from "common/components/Link/constants";

export interface LinkBaseProps {
  id?: string;
  className?: string;
  url: string;
  target?: Targets;
  linkType?: LinkTypes;
}

export interface LinkProps extends LinkBaseProps {
  children: ReactNode;
}

export const defaultProps: Partial<LinkProps> = {
  linkType: LinkTypes.Internal,
};
