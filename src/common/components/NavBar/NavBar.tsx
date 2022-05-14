import { useMediaQuery, useTheme } from "@mui/material";
import { FC, useState } from "react";
import { IconButton } from "common/components/Button";
import { NavBarProps, defaultProps } from "./NavBar.props";
import {
  DesktopNavItemsContainer,
  LinksContainer,
  LogoLink,
  Menu,
  MenuItem,
  MobileNavItemsContainer,
  NavLink,
  NavMenuContainer,
  StyledNavBar,
  StyledSvgIcon,
} from "./NavBar.style";
import { IconNames, Icons, Sizes } from "common/globals";
import { LinkTypes } from "common/components/Link";

const NavBar: FC<NavBarProps> = ({ logo, links }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only(Sizes.Mobile));
  const Logo = Icons[logo];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderDesktopNavigationItems = () => {
    return (
      <DesktopNavItemsContainer>
        <LogoLink url="/">
          <StyledSvgIcon as={Logo} />
        </LogoLink>
        <LinksContainer>
          {links?.map((link) => (
            <NavLink
              key={link.id}
              url={link.url}
              linkType={
                link.isExternal
                  ? LinkTypes.External
                  : LinkTypes.Navigational
              }>
              {link.title}
            </NavLink>
          ))}
        </LinksContainer>
      </DesktopNavItemsContainer>
    );
  };

  const renderMobileNavigationItems = () => {
    return (
      <MobileNavItemsContainer>
        <LogoLink url="/">
          <StyledSvgIcon as={Logo} />
        </LogoLink>
        {links && (
          <NavMenuContainer>
            <IconButton
              icon={IconNames.Menu}
              onClick={handleOpenNavMenu}
            />
            <Menu
              keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}>
              {links.map((link) => (
                <MenuItem key={link.id} onClick={handleCloseNavMenu}>
                  <NavLink
                    key={link.id}
                    url={link.url}
                    target={link.target}
                    linkType={
                      link.isExternal
                        ? LinkTypes.External
                        : LinkTypes.Navigational
                    }>
                    {link.title}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </NavMenuContainer>
        )}
      </MobileNavItemsContainer>
    );
  };

  return (
    <StyledNavBar>
      {isMobile
        ? renderMobileNavigationItems()
        : renderDesktopNavigationItems()}
    </StyledNavBar>
  );
};

NavBar.defaultProps = defaultProps;

export default NavBar;
