import { CircularProgress, Fade, LinearProgress } from "@mui/material";
import styled from "styled-components";

interface StyledLoaderProps {}

export const StyledFade = styled(Fade)<StyledLoaderProps>``;

export const StyledCircularLoader = styled(
  CircularProgress,
)<StyledLoaderProps>``;

export const StyledLinearLoader = styled(
  LinearProgress,
)<StyledLoaderProps>``;
