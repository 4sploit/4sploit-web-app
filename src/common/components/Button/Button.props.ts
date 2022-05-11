import { MouseEventHandler, ReactNode } from "react";
import { Colors, Variants } from "common/globals";

export interface ButtonBaseProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonBaseProps {
  color?: Colors;
  variant?: Variants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

export const defaultProps: Partial<ButtonProps> = {
  color: Colors.Default,
  variant: Variants.Text,
};
