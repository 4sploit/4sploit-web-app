import { FC } from "react";
import { HomePageProps, defaultProps } from "./HomePage.props";
import { StyledHomePage } from "./HomePage.style";
import { Link } from "react-router-dom";
import { useAppDispatch } from "src/app/hooks";
import { setMetadata } from "src/features/PageMetadata/PageMetadata.slice";
import { metadata } from "./HomePage.metadata";

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
  const dispatch = useAppDispatch();
  dispatch(setMetadata(metadata));

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

export default HomePage;
