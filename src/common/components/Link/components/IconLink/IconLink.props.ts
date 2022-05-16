import { LinkTypes } from "common/components/Link/constants";
import { LinkBaseProps } from "common/components/Link/Link.props";
import { IconNames } from "common/globals";

export interface IconLinkProps extends LinkBaseProps {
  icon: IconNames;
}

export const defaultProps: Partial<IconLinkProps> = {
  linkType: LinkTypes.Internal,
};
