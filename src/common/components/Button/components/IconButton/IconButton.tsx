import { FC } from "react";
import { IconButtonProps, defaultProps } from "./IconButton.props";
import { StyledIconButton } from "./IconButton.style";

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return <StyledIconButton {...rest}>{icon}</StyledIconButton>;
};

IconButton.defaultProps = defaultProps;

export default IconButton;
