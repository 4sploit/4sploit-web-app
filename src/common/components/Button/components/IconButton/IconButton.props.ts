import { ReactNode } from "react";
import { ButtonBaseProps } from "../../Button.props";
import { ButtonColors } from "../../constants";

export interface IconButtonProps extends ButtonBaseProps {
  color?: ButtonColors;
  icon: ReactNode;
}

export const defaultProps: Partial<IconButtonProps> = {
  color: ButtonColors.Primary,
};
