import { FC } from "react";
import { urlUtil } from "src/common/utils";
import { defaultProps, LinkProps } from "./Link.props";
import { StyledExternalLink, StyledInternalLink } from "./Link.style";

const Link: FC<LinkProps> = ({ url, children, ...rest }) => {
  const isExternalUrl = urlUtil.isExternalUrl(url);

  return (
    <>
      {isExternalUrl ? (
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
