import { LinkTypes } from "common/components/Link/constants";
import { FC } from "react";
import { defaultProps, LinkProps } from "./Link.props";
import {
  StyledExternalLink,
  StyledInternalLink,
  StyledNavigationalLink,
} from "./Link.style";

const Link: FC<LinkProps> = ({
  url,
  children,
  linkType,
  target,
  ...rest
}) => {
  let LinkElement = null;

  switch (linkType) {
    case LinkTypes.Internal:
      LinkElement = (
        <StyledInternalLink to={url} {...rest}>
          {children}
        </StyledInternalLink>
      );
      break;
    case LinkTypes.External:
      LinkElement = (
        <StyledExternalLink href={url} target={target} {...rest}>
          {children}
        </StyledExternalLink>
      );
      break;
    case LinkTypes.Navigational:
      LinkElement = (
        <StyledNavigationalLink to={url} {...rest}>
          {children}
        </StyledNavigationalLink>
      );
      break;
    default:
      throw new Error("Invalid Link Type");
  }

  return LinkElement;
};

Link.defaultProps = defaultProps;

export default Link;
