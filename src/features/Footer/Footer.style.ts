import { SvgIcon } from "@mui/material";
import { Link } from "common/components";
import { Sizes } from "common/styles";
import styled from "styled-components";

interface Props {}

export const StyledFooter = styled.footer<Props>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #272727;
  box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 20%),
    0px -4px 5px 0px rgb(0 0 0 / 14%), 0px -1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Container = styled.div<Props>`
  display: flex;
  padding-left: 0.2rem;
  ${({ theme }) => theme.breakpoints.up(Sizes.Tablet)} {
    padding-left: 1rem;
  }
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
    text-decoration: none;
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
`;

export const CopyrightText = styled.span<Props>``;
