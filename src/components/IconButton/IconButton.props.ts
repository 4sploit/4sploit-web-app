import { MouseEventHandler, ReactNode } from "react";
import { ButtonColors } from "../Button";

export type Props = IconButtonProps;

export interface IconButtonProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  color?: ButtonColors;
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const defaultProps: Partial<Props> = {
  color: ButtonColors.Primary,
};
