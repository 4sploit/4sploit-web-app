import { FC } from "react";
import { useAppSelector } from "src/app/hooks";
import { NavBar } from "src/common/components/NavBar";
import { HeaderProps, defaultProps } from "./Header.props";
import { StyledHeader } from "./Header.style";
import { ReactComponent as HeaderLogo } from "src/assets/images/logo.svg";

const Header: FC<HeaderProps> = () => {
  const headerStore = useAppSelector((state) => state.header);
  const links = headerStore.links;

  return (
    <StyledHeader>
      <NavBar logo={<HeaderLogo />} links={links} />
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;

export default Header;
