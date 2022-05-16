import { Icons } from "common/globals";
import { FC } from "react";
import { IconLinkProps, defaultProps } from "./IconLink.props";
import { StyledIconLink } from "./IconLink.style";

const IconLink: FC<IconLinkProps> = ({ icon, ...rest }) => {
  const Icon = Icons[icon];

  return (
    <StyledIconLink {...rest}>
      <Icon />
    </StyledIconLink>
  );
};

IconLink.defaultProps = defaultProps;

export default IconLink;
