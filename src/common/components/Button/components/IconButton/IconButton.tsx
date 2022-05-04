import { FC } from "react";
import { IconButtonProps, defaultProps } from "./IconButton.props";
import { StyledIconButton } from "./IconButton.style";

const IconButton: FC<IconButtonProps> = ({
  id,
  className,
  disabled,
  style,
  icon,
  onClick,
}) => {
  return (
    <StyledIconButton
      id={id}
      className={className}
      disabled={disabled}
      style={style}
      onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
