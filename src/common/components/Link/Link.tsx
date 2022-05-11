import { FC } from "react";
import { defaultProps, LinkProps } from "./Link.props";
import { StyledExternalLink, StyledInternalLink } from "./Link.style";

const Link: FC<LinkProps> = ({ url, children, isExternal, ...rest }) => {
  return (
    <>
      {isExternal ? (
        <StyledExternalLink href={url} {...rest}>
          {children}
        </StyledExternalLink>
      ) : (
        <StyledInternalLink to={url} {...rest}>
          {children}
        </StyledInternalLink>
      )}
    </>
  );
};

Link.defaultProps = defaultProps;

export default Link;
