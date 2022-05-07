import { useMediaQuery, useTheme } from "@mui/material";
import { FC, useState } from "react";
import { IconButton } from "common/components/Button";
import { NavBarProps, defaultProps } from "./NavBar.props";
import MenuIcon from "@mui/icons-material/Menu";
import {
  LogoLink,
  Menu,
  MenuItem,
  NavLink,
  StyledNavBar,
  Toolbar,
  ToolbarContainer,
} from "./NavBar.style";
import { Sizes } from "common/styles";

const NavBar: FC<NavBarProps> = ({ Logo, links }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only(Sizes.Mobile));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderDesktopNavigationItems = () => {
    return (
      <>
        <LogoLink url="/">
          <Logo />
        </LogoLink>
        {links?.map((link) => (
          <NavLink key={link.id} url={link.url}>
            {link.title}
          </NavLink>
        ))}
      </>
    );
  };

  const renderMobileNavigationItems = () => {
    return (
      <>
        <IconButton icon={<MenuIcon />} onClick={handleOpenNavMenu} />
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
          {links?.map((link) => (
            <MenuItem key={link.id} onClick={handleCloseNavMenu}>
              <NavLink key={link.id} url={link.url}>
                {link.title}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  };

  return (
    <StyledNavBar>
      <ToolbarContainer>
        <Toolbar>
          {isMobile
            ? renderMobileNavigationItems()
            : renderDesktopNavigationItems()}
        </Toolbar>
      </ToolbarContainer>
    </StyledNavBar>
  );
};

NavBar.defaultProps = defaultProps;

export default NavBar;
