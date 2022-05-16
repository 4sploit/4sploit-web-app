import { Icon } from "common/components";
import { FC } from "react";
import { IconLinkProps, defaultProps } from "./IconLink.props";
import { StyledIconLink } from "./IconLink.style";

const IconLink: FC<IconLinkProps> = ({ icon, ...rest }) => {
  return (
    <StyledIconLink {...rest}>
      <Icon icon={icon} />
    </StyledIconLink>
  );
};

IconLink.defaultProps = defaultProps;

export default IconLink;
