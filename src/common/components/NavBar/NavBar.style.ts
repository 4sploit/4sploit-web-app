import {
  Menu as MaterialMenu,
  MenuItem as MaterialMenuItem,
} from "@mui/material";
import { IconLink, Link } from "common/components";
import { Sizes } from "common/globals";
import styled, { css } from "styled-components";

interface Props {}

const SharedNavItemsStyle = css<Props>`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledNavBar = styled.div<Props>`
  display: flex;
`;

export const DesktopNavItemsContainer = styled.div<Props>`
  ${SharedNavItemsStyle}
`;

export const MobileNavItemsContainer = styled.div<Props>`
  ${SharedNavItemsStyle}
`;

export const LinksContainer = styled.div<Props>`
  display: flex;
`;

export const NavMenuContainer = styled.div<Props>`
  display: flex;
`;

export const NavLink = styled(Link)<Props>`
  line-height: 2.2;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  ${({ theme }) => theme.breakpoints.up(Sizes.Tablet)} {
    padding: 0.875rem 1rem;
  }
`;

export const LogoIconLink = styled(IconLink)<Props>`
  .icon {
    width: 35pt;
    height: 35pt;
    ${({ theme }) => theme.breakpoints.up(Sizes.Tablet)} {
      width: 45pt;
      height: 45pt;
    }
  }
`;

export const Menu = styled(MaterialMenu)<Props>``;

export const MenuItem = styled(MaterialMenuItem)<Props>``;
