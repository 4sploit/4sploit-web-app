import { useAppSelector } from "app/hooks";
import { FC } from "react";
import { AboutMeProps, defaultProps } from "./AboutMe.props";
import {
  ActionLink,
  ActionsContainer,
  Container,
  Description,
  InfoContainer,
  Name,
  Photo,
  PhotoContainer,
  Specialty,
} from "./AboutMe.style";

const AboutMe: FC<AboutMeProps> = () => {
  const aboutMe = useAppSelector((state) => state.aboutMe);

  return (
    <Container>
      <PhotoContainer>
        <Photo src={aboutMe.photo} alt={aboutMe.name} />
      </PhotoContainer>
      <InfoContainer>
        <Name>{aboutMe.name}</Name>
        <Specialty>{aboutMe.speciality}</Specialty>
        <Description>{aboutMe.description}</Description>
        <ActionsContainer>
          {aboutMe.actions.map((action) => (
            <ActionLink
              key={action.id}
              url={action.url}
              target={action.target}
              isExternal={action.isExternal}>
              {action.title}
            </ActionLink>
          ))}
        </ActionsContainer>
      </InfoContainer>
    </Container>
  );
};

AboutMe.defaultProps = defaultProps;

export default AboutMe;
