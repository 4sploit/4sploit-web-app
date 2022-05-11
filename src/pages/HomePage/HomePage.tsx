import { FC } from "react";
import { HomePageProps, defaultProps } from "./HomePage.props";
import { Container } from "./HomePage.style";
import { metadata } from "./HomePage.metadata";
import { withPageMetadata } from "common/hocs";
import { AboutMe } from "features";

const HomePage: FC<HomePageProps> = () => {
  return (
    <Container>
      <AboutMe />
    </Container>
  );
};

HomePage.defaultProps = defaultProps;

export default withPageMetadata(HomePage, metadata);
