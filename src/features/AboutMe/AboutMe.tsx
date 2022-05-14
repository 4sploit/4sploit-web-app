import { useAppSelector } from "app/hooks";
import { LinkTypes } from "common/components/Link";
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
        <Photo isLazy={true} src={aboutMe.photo} alt={aboutMe.name} />
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
              linkType={
                action.isExternal ? LinkTypes.External : LinkTypes.Internal
              }>
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
