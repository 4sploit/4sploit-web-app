import { Container } from "@mui/material";
import { Colors, Sizes } from "common/globals";
import styled from "styled-components";

interface Props {}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.RaisinBlack};
  min-height: 100vh;
`;

export const HeaderContainer = styled(Container)<Props>`
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${Colors.CharlestonGreen};
  border-bottom: 0.125rem solid ${Colors.DarkCharcoal};
`;

export const MainContainer = styled(Container)<Props>`
  margin-top: 5rem;
  margin-bottom: 5rem;
  word-break: break-word;
  max-width: ${({ theme }) =>
    theme.typography.pxToRem(theme.breakpoints.values.desktop)};
  ${({ theme }) => theme.breakpoints.up(Sizes.Tablet)} {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;

export const FooterContainer = styled(Container)<Props>`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${Colors.CharlestonGreen};
  border-top: 0.125rem solid ${Colors.DarkCharcoal};
  padding: 0.5rem;
`;
