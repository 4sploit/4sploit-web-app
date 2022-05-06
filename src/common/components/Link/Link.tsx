import { FC } from "react";
import { defaultProps, LinkProps } from "./Link.props";
import { StyledLink } from "./Link.style";

const Link: FC<LinkProps> = ({ url, children, ...rest }) => {
  return (
    <StyledLink to={{ pathname: url }} {...rest}>
      {children}
    </StyledLink>
  );
};

Link.defaultProps = defaultProps;

export default Link;
