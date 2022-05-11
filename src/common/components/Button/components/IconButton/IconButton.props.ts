import { ReactNode } from "react";
import { Colors } from "common/globals";
import { ButtonBaseProps } from "common/components/Button/Button.props";

export interface IconButtonProps extends ButtonBaseProps {
  color?: Colors;
  icon: ReactNode;
}

export const defaultProps: Partial<IconButtonProps> = {
  color: Colors.Default,
};
