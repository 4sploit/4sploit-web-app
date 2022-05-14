import { Colors } from "common/globals";
import { Link as RouterLink, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface Props {}

const SharedStyle = css<Props>`
  text-decoration: none;
  font-size: 0.938rem;
  color: ${Colors.LightWhiteSmoke};
  text-transform: capitalize;
  font-weight: 500;
`;

export const StyledInternalLink = styled(RouterLink)<Props>`
  ${SharedStyle}
`;

export const StyledExternalLink = styled.a<Props>`
  ${SharedStyle}
`;

export const StyledNavigationalLink = styled(NavLink)<Props>`
  ${SharedStyle}
  &.active {
    border-bottom: 0.094rem solid ${Colors.White};
  }
`;
