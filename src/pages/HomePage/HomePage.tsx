import { FC } from "react";
import { HomePageProps, defaultProps } from "./HomePage.props";
import { StyledHomePage } from "./HomePage.style";
import { PageMetadata } from "src/common/components";
import { metadata } from "./HomePage.metadata";
import { Link } from "react-router-dom";

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
  return (
    <>
      <PageMetadata {...metadata} />
      <StyledHomePage {...props}>
        <div>
          <Link to={"/projects"}>projects</Link>
        </div>
        <div>
          <Link to={"/blog"}>blog</Link>
        </div>
      </StyledHomePage>
    </>
  );
};

HomePage.defaultProps = defaultProps;

export default HomePage;
