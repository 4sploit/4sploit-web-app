import { LoaderShape } from "common/components/Loader/constants";

export interface LoaderProps {
  shape?: LoaderShape;
  delay?: number;
}

export const defaultProps: Partial<LoaderProps> = {
  shape: LoaderShape.Circular,
  delay: 0,
};
