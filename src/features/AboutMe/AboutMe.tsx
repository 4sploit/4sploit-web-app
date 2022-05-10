import { FC } from "react";
import { AboutMeProps, defaultProps } from "./AboutMe.props";
import {
  Container,
  Description,
  InfoContainer,
  Name,
  PersonalPhotoContainer,
  Specialty,
} from "./AboutMe.style";

const AboutMe: FC<AboutMeProps> = () => {
  return (
    <Container>
      <PersonalPhotoContainer></PersonalPhotoContainer>
      <InfoContainer>
        <Specialty></Specialty>
        <Name></Name>
        <Description></Description>
      </InfoContainer>
    </Container>
  );
};

AboutMe.defaultProps = defaultProps;

export default AboutMe;
