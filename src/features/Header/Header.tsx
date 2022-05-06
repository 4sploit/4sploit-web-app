import { FC } from "react";
import { useAppSelector } from "src/app/hooks";
import { NavBar } from "src/common/components/NavBar";
import { HeaderProps, defaultProps } from "./Header.props";
import { StyledHeader } from "./Header.style";

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const headerStore = useAppSelector((state) => state.header);
  const links = headerStore.links;

  return (
    <StyledHeader {...props}>
      <NavBar links={links} />
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;

export default Header;
