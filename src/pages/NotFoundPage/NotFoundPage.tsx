import { FC } from "react";
import { withPageMetadata } from "common/hocs";
import { metadata } from "./NotFoundPage.metadata";
import { NotFoundPageProps, defaultProps } from "./NotFoundPage.props";
import {
  Container,
  ContentContainer,
  GoBackButton,
  HomePageLink,
  HomePageLinkIcon,
  LinksContainer,
  Title,
  TitleIcon,
} from "./NotFoundPage.style";
import { useNavigate } from "react-router-dom";
import { Actions, Icons, Variants } from "common/globals";

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const navigate = useNavigate();
  const ErrorIcon = Icons.ERROR;
  const HomeIcon = Icons.HOME;

  return (
    <Container>
      <ContentContainer>
        <TitleIcon fontSize="8" as={ErrorIcon} />
        <Title>Page Not Found</Title>
      </ContentContainer>
      <LinksContainer>
        <HomePageLink url="/">
          <HomePageLinkIcon fontSize="2.5" as={HomeIcon} />
        </HomePageLink>
        <GoBackButton
          variant={Variants.Contained}
          action={Actions.Primary}
          onClick={() => navigate(-1)}>
          Go Back
        </GoBackButton>
      </LinksContainer>
    </Container>
  );
};

NotFoundPage.defaultProps = defaultProps;

export default withPageMetadata(NotFoundPage, metadata);
