import { Container } from "@mui/material";
import styled from "styled-components";

interface Props {}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: #404040;
`;

export const HeaderContainer = styled(Container)<Props>``;

export const MainContainer = styled(Container)<Props>`
  height: 90vh;
  margin-top: 4.5rem;
  max-width: none;
`;

export const FooterContainer = styled(Container)<Props>`
  height: 4.5vh;
  max-width: none;
`;
