import { FC } from "react";
import { StyledButton } from "./Button.style";
import { ButtonProps, defaultProps } from "./Button.props";

const Button: FC<ButtonProps> = ({ children, action, ...rest }) => {
  return (
    <StyledButton color={action} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;
