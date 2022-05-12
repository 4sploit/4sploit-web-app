import { Icons } from "common/globals";
import { FC } from "react";
import { IconButtonProps, defaultProps } from "./IconButton.props";
import { StyledIconButton } from "./IconButton.style";

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  const Icon = Icons[icon];

  return (
    <StyledIconButton {...rest}>
      <Icon />
    </StyledIconButton>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
