import { FC } from "react";
import { StyledButton } from "./Button.style";
import { ButtonProps, defaultProps } from "./Button.props";

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.defaultProps = defaultProps;

export default Button;
