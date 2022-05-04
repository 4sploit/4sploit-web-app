import { MouseEventHandler, ReactNode } from "react";
import { ButtonStyles, ButtonVariants } from "./constants";

export interface ButtonProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  style?: ButtonStyles;
  variant?: ButtonVariants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const defaultProps: Partial<ButtonProps> = {
  style: ButtonStyles.Primary,
  variant: ButtonVariants.Text,
};
