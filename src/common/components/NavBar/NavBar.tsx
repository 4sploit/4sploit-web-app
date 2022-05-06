import { useMediaQuery, useTheme } from "@mui/material";
import { FC, useState } from "react";
import { IconButton } from "src/common/components/Button";
import { NavBarProps, defaultProps } from "./NavBar.props";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ItemsContainer,
  Menu,
  MenuItem,
  NavLink,
  StyledNavBar,
  Toolbar,
  ToolbarContainer,
} from "./NavBar.style";
import { Sizes } from "src/common/styles";

const NavBar: FC<NavBarProps> = ({ links }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only(Sizes.Mobile));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderDesktopNavItems = () => {
    return (
      <ItemsContainer>
        {links?.map((link) => (
          <NavLink key={link.id} url={link.url}>
            {link.title}
          </NavLink>
        ))}
      </ItemsContainer>
    );
  };

  const renderMobileNavItems = () => {
    return (
      <ItemsContainer>
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
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}>
          {links?.map((link) => (
            <MenuItem key={link.id} onClick={handleCloseNavMenu}>
              <NavLink key={link.id} url={link.url}>
                {link.title}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </ItemsContainer>
    );
  };

  return (
    <StyledNavBar>
      <ToolbarContainer>
        <Toolbar>
          {isMobile ? renderMobileNavItems() : renderDesktopNavItems()}
        </Toolbar>
      </ToolbarContainer>
    </StyledNavBar>
  );
};

NavBar.defaultProps = defaultProps;

export default NavBar;
