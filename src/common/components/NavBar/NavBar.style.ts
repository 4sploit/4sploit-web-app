import {
  AppBar,
  Box,
  Container,
  Toolbar as MaterialToolbar,
  Menu as MaterialMenu,
  MenuItem as MaterialMenuItem,
} from "@mui/material";
import { Sizes } from "src/common/styles";
import styled from "styled-components";
import { Link } from "../Link";

interface Props {}

export const StyledNavBar = styled(AppBar)<Props>``;

export const NavLink = styled(Link)<Props>`
  line-height: 1.75;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    text-decoration: none;
  }

  ${({ theme }) => theme.breakpoints.up(Sizes.Tablet)} {
    padding: 0.75rem 0.5rem;
  }
`;

export const ToolbarContainer = styled(Container)<Props>`
  max-width: ${({ theme }) =>
    theme.typography.pxToRem(theme.breakpoints.values.desktop)};
`;

export const Toolbar = styled(MaterialToolbar)<Props>``;

export const ItemsContainer = styled.div<Props>`
  display: flex;
`;

export const Menu = styled(MaterialMenu)<Props>``;

export const MenuItem = styled(MaterialMenuItem)<Props>``;
