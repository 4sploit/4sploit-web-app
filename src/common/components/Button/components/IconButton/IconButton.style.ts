import styled from "styled-components";
import { Button } from "common/components/Button";

interface StyledIconButtonProps {}

export const StyledIconButton = styled(Button)<StyledIconButtonProps>`
  &.MuiButton-root {
    border-radius: 50%;
    min-width: auto;
  }
`;
