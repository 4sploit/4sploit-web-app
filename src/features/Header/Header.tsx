import { FC } from "react";
import { useAppSelector } from "src/app/hooks";
import { NavBar } from "src/common/components/NavBar";
import { HeaderProps, defaultProps } from "./Header.props";
import { StyledHeader } from "./Header.style";
import { IconNames, Icons } from "src/common/styles";

const Header: FC<HeaderProps> = () => {
  const headerStore = useAppSelector((state) => state.header);
  const links = headerStore.links;
  const logo = Icons[IconNames.Logo];

  return (
    <StyledHeader>
      <NavBar Logo={logo} links={links} />
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;

export default Header;
