import { FC } from "react";
import { IconButtonProps, defaultProps } from "./IconButton.props";
import { StyledIconButton } from "./IconButton.style";

const IconButton: FC<IconButtonProps> = ({
  id,
  className,
  disabled,
  color,
  icon,
  onClick,
}) => {
  return (
    <StyledIconButton
      id={id}
      className={className}
      disabled={disabled}
      color={color}
      onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
