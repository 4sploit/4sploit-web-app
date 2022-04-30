import { FC } from "react";
import { LoadingPageProps, defaultProps } from "./LoadingPage.props";
import { StyledLoadingPage } from "./LoadingPage.style";
import { CircularProgress } from "@mui/material";

const LoadingPage: FC<LoadingPageProps> = (props: LoadingPageProps) => {
  return (
    <StyledLoadingPage {...props}>
      <CircularProgress />
    </StyledLoadingPage>
  );
};

LoadingPage.defaultProps = defaultProps;

export default LoadingPage;
