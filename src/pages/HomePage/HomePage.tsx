import { FC } from "react";
import { HomePageProps, defaultProps } from "./HomePage.props";
import { StyledHomePage } from "./HomePage.style";
import { Link } from "react-router-dom";
import { metadata } from "./HomePage.metadata";
import { withPageMetadata } from "src/common/hocs";

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
  return (
    <>
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

export default withPageMetadata(HomePage, metadata);
