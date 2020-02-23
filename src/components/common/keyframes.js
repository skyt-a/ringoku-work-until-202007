import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;