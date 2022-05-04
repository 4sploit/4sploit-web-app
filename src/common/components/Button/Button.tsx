import { FC } from "react";
import { StyledButton } from "./Button.style";
import { ButtonProps, defaultProps } from "./Button.props";

const Button: FC<ButtonProps> = ({
  id,
  className,
  disabled,
  style,
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
      color={style}
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
