import { ReactNode } from "react";
import { Colors } from "src/common/styles";
import { ButtonBaseProps } from "../../Button.props";

export interface IconButtonProps extends ButtonBaseProps {
  color?: Colors;
  icon: ReactNode;
}

export const defaultProps: Partial<IconButtonProps> = {
  color: Colors.Default,
};
