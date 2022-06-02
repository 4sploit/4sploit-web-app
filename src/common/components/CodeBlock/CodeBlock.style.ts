import { Colors } from "common/globals";
import styled from "styled-components";

interface StyledCodeBlockProps {}

export const StyledCodeBlock = styled.code<StyledCodeBlockProps>`
  background-color: ${Colors.CodGray};
  padding: 1rem;
  border-radius: 0.375rem;
  font-size: 0.9rem;
`;
