import { Link } from "common/components";
import { Sizes } from "common/globals";
import styled from "styled-components";

interface Props {}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up(Sizes.Laptop)} {
    flex-direction: row;
    column-gap: 2rem;
  }
`;

export const PersonalPhotoContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
`;

export const PersonalPhoto = styled.img<Props>`
  border-radius: 50%;
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
`;

export const Name = styled.h1<Props>`
  margin: 0;
`;

export const Description = styled.p<Props>``;

export const InfoActionsContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
`;

export const ActionLink = styled(Link)<Props>`
  border: 0.125rem solid white;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 1.875rem;
  background-color: #121212;
  &:hover {
    text-decoration: none;
    border: 0.125rem solid black;
    background-color: white;
    color: #121212;
    transition: all 0.6s ease-in-out;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
`;
