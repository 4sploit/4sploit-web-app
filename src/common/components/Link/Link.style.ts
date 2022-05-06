import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

interface StyledLinkProps {}

export const StyledLink = styled(RouterLink)<StyledLinkProps>`
  text-decoration: none;
  font-size: ${({ theme }) =>
    theme.typography.pxToRem(theme.typography.fontSize)};
  color: #f5f5f5;
  text-transform: capitalize;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
