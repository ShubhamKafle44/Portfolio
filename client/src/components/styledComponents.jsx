import styled from "styled-components";
// Styled component for fixed heading
export const FixedHeading = styled.h1`
  position: fixed;
  top: 20px;
  right: 0;
  font-size: 2rem;
  font-weight: 900;
  font-stretch: condensed;
  text-transform: uppercase;
  margin: 1rem;
  z-index: 1000;
  font-family: "Burtons", sans-serif;

  @media (max-width: 768px) {
    font-size: 2 rem;
    top: 15px;
    margin: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    top: 10px;
    margin: 0.5rem;
  }
`;

// Styled component for H1
export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  font-stretch: condensed;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
