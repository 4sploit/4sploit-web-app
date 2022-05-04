import { MouseEventHandler, ReactNode } from "react";
import { ButtonStyles } from "../../constants";

export interface IconButtonProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  style?: ButtonStyles;
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const defaultProps: Partial<IconButtonProps> = {
  style: ButtonStyles.Primary,
};
