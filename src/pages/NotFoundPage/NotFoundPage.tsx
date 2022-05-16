import { FC } from "react";
import { withPageMetadata } from "common/hocs";
import { metadata } from "./NotFoundPage.metadata";
import { NotFoundPageProps, defaultProps } from "./NotFoundPage.props";
import {
  Container,
  ContentContainer,
  GoBackButton,
  HomePageIconLink,
  LinksContainer,
  Title,
  TitleIcon,
} from "./NotFoundPage.style";
import { useNavigate } from "react-router-dom";
import { Actions, IconNames, Variants } from "common/globals";

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentContainer>
        <TitleIcon icon={IconNames.Error} />
        <Title>Page Not Found</Title>
      </ContentContainer>
      <LinksContainer>
        <HomePageIconLink url="/" icon={IconNames.Home} />
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
