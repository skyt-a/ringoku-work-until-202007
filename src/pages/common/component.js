import styled, { createGlobalStyle } from "styled-components";
import { fadeIn } from "./keyframes";

export const Main = styled.main`
  animation: ${fadeIn} 0.3s linear;
`;

export const Section = styled.section`
  max-width: 1024px;
  padding: 24px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 3rem;
`;

export const Subtitle = styled.h3`
  margin-top: 2.4rem;
  font-size: 2.5rem;
`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-y: auto;
  }
`;