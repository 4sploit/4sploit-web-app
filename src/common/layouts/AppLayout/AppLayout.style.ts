import { Container } from "@mui/material";
import { Sizes } from "common/globals";
import styled from "styled-components";

interface Props {}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: #404040;
  min-height: 100vh;
`;

export const HeaderContainer = styled(Container)<Props>``;

export const MainContainer = styled(Container)<Props>`
  margin-top: 4rem;
  word-break: break-word;
  max-width: ${({ theme }) =>
    theme.typography.pxToRem(theme.breakpoints.values.desktop)};
  ${({ theme }) => theme.breakpoints.up(Sizes.Tablet)} {
    margin-top: 6rem;
  }
`;

export const FooterContainer = styled(Container)<Props>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #272727;
  box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 20%),
    0px -4px 5px 0px rgb(0 0 0 / 14%), 0px -1px 10px 0px rgb(0 0 0 / 12%);
`;
