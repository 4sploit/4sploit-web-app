import { Button, Icon, IconLink } from "common/components";
import styled, { css } from "styled-components";

interface Props {}

const SharedContainerStyle = css<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div<Props>`
  ${SharedContainerStyle}
`;

export const ContentContainer = styled.div<Props>`
  .icon {
    font-size: 8rem;
  }
  ${SharedContainerStyle}
`;

export const LinksContainer = styled.div<Props>`
  display: flex;
  column-gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
`;

export const TitleIcon = styled(Icon)<Props>``;

export const Title = styled.h1<Props>``;

export const HomePageIconLink = styled(IconLink)<Props>`
  .icon {
    font-size: 2.5rem;
  }
`;

export const GoBackButton = styled(Button)<Props>``;
