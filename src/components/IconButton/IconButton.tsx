import { FC } from "react";
import { Props, defaultProps } from "./IconButton.props";
import { StyledIconButton } from "./IconButton.style";

const IconButton: FC<Props> = ({
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
