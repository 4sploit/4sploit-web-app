import { SvgIcon } from "@mui/material";
import { Link } from "common/components";
import styled from "styled-components";

interface Props {}

export const StyledFooter = styled.footer<Props>``;

export const Container = styled.div<Props>`
  display: flex;
`;

export const ExternalLinksContainer = styled.div<Props>`
  display: flex;
  flex-basis: 5%;
  line-height: 0.5;
`;

export const ExternalLink = styled(Link)<Props>`
  padding: 0.2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const StyledSvgIcon = styled(SvgIcon)<Props>`
  font-size: 1.313rem;
`;

export const CopyrightContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 0.875rem;
  align-self: center;
`;

export const CopyrightText = styled.span<Props>``;
