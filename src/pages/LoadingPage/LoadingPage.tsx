import { FC } from "react";
import { LoadingPageProps, defaultProps } from "./LoadingPage.props";
import { StyledLoadingPage } from "./LoadingPage.style";
import { Loader } from "common/components";

const LoadingPage: FC<LoadingPageProps> = (props: LoadingPageProps) => {
  return (
    <StyledLoadingPage {...props}>
      <Loader />
    </StyledLoadingPage>
  );
};

LoadingPage.defaultProps = defaultProps;

export default LoadingPage;
