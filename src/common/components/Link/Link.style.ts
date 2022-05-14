import { Colors } from "common/globals";
import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledLinkProps {}

const SharedStyle = css<StyledLinkProps>`
  text-decoration: none;
  font-size: 0.938rem;
  color: ${Colors.LightWhiteSmoke};
  text-transform: capitalize;
  font-weight: 500;
`;

export const StyledInternalLink = styled(RouterLink)<StyledLinkProps>`
  ${SharedStyle}
`;

export const StyledExternalLink = styled.a<StyledLinkProps>`
  ${SharedStyle}
`;
