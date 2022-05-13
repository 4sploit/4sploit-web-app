import { Actions, IconNames } from "common/globals";
import { ButtonBaseProps } from "common/components/Button/Button.props";

export interface IconButtonProps extends ButtonBaseProps {
  action?: Actions;
  icon: IconNames;
}

export const defaultProps: Partial<IconButtonProps> = {
  action: Actions.Default,
};
