import { FC } from "react";
import { useAppDispatch } from "src/app/hooks";
import { setMetadata } from "src/features/PageMetadata/PageMetadata.slice";
import { metadata } from "./NotFoundPage.metadata";
import { NotFoundPageProps, defaultProps } from "./NotFoundPage.props";
import { StyledNotFoundPage } from "./NotFoundPage.style";

const NotFoundPage: FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
  const dispatch = useAppDispatch();
  dispatch(setMetadata(metadata));

  return <StyledNotFoundPage {...props}>NotFoundPage</StyledNotFoundPage>;
};

NotFoundPage.defaultProps = defaultProps;

export default NotFoundPage;
