import { FC } from "react";
import { LoadingPageProps, defaultProps } from "./LoadingPage.props";
import { StyledLoadingPage } from "./LoadingPage.style";
import { CircularProgress } from "@mui/material";
import { useAppDispatch } from "src/app/hooks";
import { setMetadata } from "src/features/PageMetadata/PageMetadata.slice";
import { metadata } from "./LoadingPage.metadata";

const LoadingPage: FC<LoadingPageProps> = (props: LoadingPageProps) => {
  const dispatch = useAppDispatch();
  dispatch(setMetadata(metadata));

  return (
    <StyledLoadingPage {...props}>
      <CircularProgress />
    </StyledLoadingPage>
  );
};

LoadingPage.defaultProps = defaultProps;

export default LoadingPage;
