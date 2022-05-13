export interface ImageProps {
  id?: string;
  className?: string;
  src: string;
  alt: string;
  isLazy?: boolean;
}

export const defaultProps: Partial<ImageProps> = {
  isLazy: false,
};
