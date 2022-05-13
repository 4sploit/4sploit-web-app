import { FC } from "react";
import { useAppSelector } from "app/hooks";
import { NavBar } from "common/components/NavBar";
import { HeaderProps, defaultProps } from "./Header.props";
import { StyledHeader } from "./Header.style";

const Header: FC<HeaderProps> = () => {
  const headerStore = useAppSelector((state) => state.header);
  const logo = headerStore.logo;

  return (
    <StyledHeader>
      <NavBar logo={logo} />
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;

export default Header;
