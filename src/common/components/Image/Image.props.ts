import { ImageEffect } from "common/components/Image/constants";

export interface ImageProps {
  id?: string;
  className?: string;
  src: string;
  alt: string;
  isLazy?: boolean;
  width?: number;
  height?: number;
  effect?: ImageEffect;
}

export const defaultProps: Partial<ImageProps> = {
  isLazy: false,
  effect: ImageEffect.Blur,
};
