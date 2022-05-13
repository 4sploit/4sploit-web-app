import { SvgIcon } from "@mui/material";
import { Button, Link } from "common/components";
import styled, { css } from "styled-components";

interface Props {}

const StyledSvgIcon = styled(SvgIcon)<Props>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
`;

const SharedContainerStyle = css<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div<Props>`
  ${SharedContainerStyle}
`;

export const ContentContainer = styled.div<Props>`
  ${SharedContainerStyle}
`;

export const LinksContainer = styled.div<Props>`
  display: flex;
  column-gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
`;

export const TitleIcon = styled(StyledSvgIcon)<Props>``;

export const Title = styled.h1<Props>``;

export const HomePageLink = styled(Link)<Props>``;

export const HomePageLinkIcon = styled(StyledSvgIcon)<Props>``;

export const GoBackButton = styled(Button)<Props>``;
