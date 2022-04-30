import { FC } from "react";
import { withPageMetadata } from "src/common/hocs";
import { metadata } from "./NotFoundPage.metadata";
import { NotFoundPageProps, defaultProps } from "./NotFoundPage.props";
import { StyledNotFoundPage } from "./NotFoundPage.style";

const NotFoundPage: FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
  return (
    <StyledNotFoundPage {...props}>Page Not Found</StyledNotFoundPage>
  );
};

NotFoundPage.defaultProps = defaultProps;

export default withPageMetadata(NotFoundPage, metadata);
