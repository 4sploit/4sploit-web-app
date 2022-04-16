import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <>
      Home Page
      <Link to={"/projects"}>projects</Link>
    </>
  );
};

export default HomePage;
