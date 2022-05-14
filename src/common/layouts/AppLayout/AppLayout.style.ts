import { Colors, Sizes } from "common/globals";
import styled, { css } from "styled-components";

interface Props {}

const DistanceFromEdges = css<Props>`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.RaisinBlack};
  min-height: 100vh;
`;

export const HeaderContainer = styled.header<Props>`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: ${Colors.CharlestonGreen};
  border-bottom: 0.125rem solid ${Colors.DarkCharcoal};
  ${DistanceFromEdges}
`;

export const MainContainer = styled.div<Props>`
  margin-top: 5rem;
  margin-bottom: 5rem;
  word-break: break-word;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) =>
    theme.typography.pxToRem(theme.breakpoints.values.desktop)};
  ${({ theme }) => theme.breakpoints.up(Sizes.Tablet)} {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
  ${DistanceFromEdges}
`;

export const FooterContainer = styled.div<Props>`
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  background-color: ${Colors.CharlestonGreen};
  border-top: 0.125rem solid ${Colors.DarkCharcoal};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  ${DistanceFromEdges}
`;
