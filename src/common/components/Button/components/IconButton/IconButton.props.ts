import { Colors, IconNames } from "common/globals";
import { ButtonBaseProps } from "common/components/Button/Button.props";

export interface IconButtonProps extends ButtonBaseProps {
  color?: Colors;
  icon: IconNames;
}

export const defaultProps: Partial<IconButtonProps> = {
  color: Colors.Default,
};
