import { LoaderShape } from "common/components/Loader/constants";
import { FC } from "react";
import { LoaderProps, defaultProps } from "./Loader.props";
import {
  StyledCircularLoader,
  StyledFade,
  StyledLinearLoader,
} from "./Loader.style";

const Loader: FC<LoaderProps> = ({ shape, delay }) => {
  let LoaderElement: JSX.Element;

  switch (shape) {
    case LoaderShape.Circular:
      LoaderElement = <StyledCircularLoader />;
      break;
    case LoaderShape.Linear:
      LoaderElement = <StyledLinearLoader />;
      break;
    default:
      throw new Error("Invalid Loader Shape");
  }

  return (
    <StyledFade in={true} style={{ transitionDelay: `${delay}ms` }}>
      {LoaderElement}
    </StyledFade>
  );
};

Loader.defaultProps = defaultProps;

export default Loader;
