import { IconNames } from "common/globals";
import { ButtonBaseProps } from "common/components/Button/Button.props";
import { Actions } from "common/constants";

export interface IconButtonProps extends ButtonBaseProps {
  action?: Actions;
  icon: IconNames;
}

export const defaultProps: Partial<IconButtonProps> = {
  action: Actions.Default,
};
