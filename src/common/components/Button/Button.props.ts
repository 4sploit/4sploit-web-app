import { MouseEventHandler, ReactNode } from "react";
import { Actions, Variants } from "common/constants";

export interface ButtonBaseProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonBaseProps {
  action?: Actions;
  variant?: Variants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

export const defaultProps: Partial<ButtonProps> = {
  action: Actions.Default,
  variant: Variants.Text,
};
