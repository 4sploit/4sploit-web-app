import { useAppSelector } from "app/hooks";
import { FC } from "react";
import { AboutMeProps, defaultProps } from "./AboutMe.props";
import {
  ActionLink,
  Container,
  Description,
  InfoActionsContainer,
  InfoContainer,
  Name,
  PersonalPhoto,
  PersonalPhotoContainer,
  Specialty,
} from "./AboutMe.style";

const AboutMe: FC<AboutMeProps> = () => {
  const aboutMe = useAppSelector((state) => state.aboutMe);

  return (
    <Container>
      <PersonalPhotoContainer>
        <PersonalPhoto src={aboutMe.photo} alt={aboutMe.name} />
      </PersonalPhotoContainer>
      <InfoContainer>
        <Name>{aboutMe.name}</Name>
        <Specialty>{aboutMe.speciality}</Specialty>
        <Description>{aboutMe.description}</Description>
        <InfoActionsContainer>
          {aboutMe.actions.map((action) => (
            <ActionLink
              key={action.id}
              url={action.url}
              target={action.target}
              isExternal={action.isExternal}>
              {action.title}
            </ActionLink>
          ))}
        </InfoActionsContainer>
      </InfoContainer>
    </Container>
  );
};

AboutMe.defaultProps = defaultProps;

export default AboutMe;
