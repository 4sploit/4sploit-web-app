import { FC } from "react";
import { useAppSelector } from "app/hooks";
import { NavBar } from "common/components/NavBar";
import { HeaderProps, defaultProps } from "./Header.props";
import { StyledHeader } from "./Header.style";
import { Icons } from "common/globals";

const Header: FC<HeaderProps> = () => {
  const headerStore = useAppSelector((state) => state.header);
  const links = headerStore.links;

  return (
    <StyledHeader>
      <NavBar Logo={Icons.LOGO} links={links} />
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;

export default Header;
