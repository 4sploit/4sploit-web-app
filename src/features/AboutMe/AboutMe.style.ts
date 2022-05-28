import { Image, Link, Loader } from "common/components";
import { Colors, Sizes } from "common/globals";
import styled, { css } from "styled-components";

interface Props {}

const SharedTextAlignmentStyle = css<Props>`
  text-align: center;
  ${({ theme }) => theme.breakpoints.up(Sizes.Laptop)} {
    text-align: left;
  }
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  ${({ theme }) => theme.breakpoints.up(Sizes.Laptop)} {
    flex-direction: row;
    column-gap: 2rem;
  }
`;

export const PhotoContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
`;

export const Photo = styled(Image)<Props>`
  border: 0.313rem solid ${Colors.White};
  width: 18.75rem;
  height: 18.75rem;
  ${({ theme }) => theme.breakpoints.up(Sizes.Laptop)} {
    width: 21.875rem;
    height: 21.875rem;
  }
`;

export const InfoContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Specialty = styled.h3<Props>`
  margin: 0;
  ${SharedTextAlignmentStyle}
`;

export const Name = styled.h1<Props>`
  margin: 0;
  ${SharedTextAlignmentStyle}
`;

export const Description = styled.p<Props>``;

export const ActionsContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.up(Sizes.Laptop)} {
    justify-content: left;
  }
`;

export const ActionLink = styled(Link)<Props>`
  border: 0.125rem solid ${Colors.White};
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 1.875rem;
  background-color: ${Colors.CodGray};
  &:hover {
    border: 0.125rem solid black;
    background-color: ${Colors.White};
    color: ${Colors.CodGray};
    transition: all 0.6s ease-in-out;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
`;

export const StyledLoader = styled(Loader)<Props>``;
