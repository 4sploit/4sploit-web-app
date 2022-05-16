import { Icon } from "common/components";
import { FC } from "react";
import { IconButtonProps, defaultProps } from "./IconButton.props";
import { StyledIconButton } from "./IconButton.style";

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return (
    <StyledIconButton {...rest}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
