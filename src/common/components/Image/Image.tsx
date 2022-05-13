import { FC } from "react";
import { ImageProps, defaultProps } from "./Image.props";
import { StyledImage, StyledLazyImage } from "./Image.style";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image: FC<ImageProps> = ({ isLazy, ...rest }) => {
  return (
    <>
      {isLazy ? (
        <StyledLazyImage effect="blur" {...rest} />
      ) : (
        <StyledImage {...rest} />
      )}
    </>
  );
};

Image.defaultProps = defaultProps;

export default Image;
