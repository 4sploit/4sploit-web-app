import { MouseEventHandler, ReactNode } from "react";
import { ButtonColors, ButtonVariants } from "./constants";

export interface ButtonBaseProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonBaseProps {
  color?: ButtonColors;
  variant?: ButtonVariants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

export const defaultProps: Partial<ButtonProps> = {
  color: ButtonColors.Primary,
  variant: ButtonVariants.Text,
};
