import { FC } from "react";
import { StyledButton } from "./Button.style";
import { Props, defaultProps } from "./Button.props";

const Button: FC<Props> = ({
  id,
  className,
  disabled,
  color,
  variant,
  startIcon,
  endIcon,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      id={id}
      className={className}
      disabled={disabled}
      color={color}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;
