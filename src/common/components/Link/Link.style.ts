import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledLinkProps {}

const SharedStyle = css<StyledLinkProps>`
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

export const StyledInternalLink = styled(RouterLink)<StyledLinkProps>`
  ${SharedStyle}
`;

export const StyledExternalLink = styled.a<StyledLinkProps>`
  ${SharedStyle}
`;
