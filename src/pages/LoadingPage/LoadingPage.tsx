import { FC } from "react";
import { LoadingPageProps, defaultProps } from "./LoadingPage.props";
import { StyledLoadingPage } from "./LoadingPage.style";
import { PageMetadata } from "src/common/components";
import { metadata } from "./LoadingPage.metadata";
import { CircularProgress } from "@mui/material";

const LoadingPage: FC<LoadingPageProps> = (props: LoadingPageProps) => {
  return (
    <>
      <PageMetadata {...metadata} withTitlePostfix={false} />
      <StyledLoadingPage {...props}>
        <CircularProgress />
      </StyledLoadingPage>
    </>
  );
};

LoadingPage.defaultProps = defaultProps;

export default LoadingPage;
