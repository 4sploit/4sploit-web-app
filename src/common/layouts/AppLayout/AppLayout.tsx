import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "src/features";
import {
  FooterContainer,
  HeaderContainer,
  MainContainer,
  Wrapper,
} from "./AppLayout.style";

const AppLayout: FC = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
      <FooterContainer>{/* <Footer /> */}</FooterContainer>
    </Wrapper>
  );
};

export default AppLayout;
