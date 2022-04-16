import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return <>
    Home Page
    <Link to={"/projects"}>projects</Link>
  </>;
};

export default HomePage;
