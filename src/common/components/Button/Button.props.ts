import { MouseEventHandler, ReactNode } from "react";
import { ButtonColors, ButtonVariants } from "./constants";

export interface ButtonProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  color?: ButtonColors;
  variant?: ButtonVariants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const defaultProps: Partial<ButtonProps> = {
  color: ButtonColors.Primary,
  variant: ButtonVariants.Text,
};
