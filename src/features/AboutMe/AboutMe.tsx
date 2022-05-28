import { useTypedDispatch, useTypedSelector } from "store";
import { LinkTypes } from "common/components/Link";
import { FC, useEffect } from "react";
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
import { ApiStatus } from "common/constants";
import getAboutData from "features/AboutMe/AboutMe.thunk";
import { env } from "config";
import { Loader } from "common/components";
import { mapAboutData } from "features/AboutMe/AboutMe.slice";

const AboutMe: FC<AboutMeProps> = () => {
  const { data, status } = useTypedSelector((state) => state.aboutMe);
  const dispatch = useTypedDispatch();
  const ownerName: string = env.ownerName || "";

  useEffect(() => {
    if (status == ApiStatus.Idle) {
      dispatch(getAboutData()).then(() => dispatch(mapAboutData()));
    }
  }, [status, dispatch]);

  if (status == ApiStatus.Loading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <Container>
      <PhotoContainer>
        <Photo isLazy={true} src={data.photo} alt={ownerName} />
      </PhotoContainer>
      <InfoContainer>
        <Name>{ownerName}</Name>
        <Specialty>{data.speciality}</Specialty>
        <Description>{data.description}</Description>
        <ActionsContainer>
          {data.actions.map((action) => (
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
