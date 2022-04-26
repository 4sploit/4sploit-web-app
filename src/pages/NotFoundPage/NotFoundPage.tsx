import { FC } from "react";
import { NotFoundPageProps, defaultProps } from "./NotFoundPage.props";
import { StyledNotFoundPage } from "./NotFoundPage.style";
import { PageMetadata } from "src/components";
import { metadata } from "./NotFoundPage.metadata";

const NotFoundPage: FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
  return (
    <>
      <PageMetadata {...metadata} />
      <StyledNotFoundPage {...props}>NotFoundPage</StyledNotFoundPage>
    </>
  );
};

NotFoundPage.defaultProps = defaultProps;

export default NotFoundPage;
