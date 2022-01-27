import styled from "styled-components";

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 55px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-15%, -50%);
  pointer-events: none;
`;

export const SlideP = styled.p`
  color: #fff;
  font-size: clamp(1rem, 5vw, 1.5rem);
`;

export const SlideH1 = styled.h1`
  color: #fff;
  font-size: clamp(2rem, 5vw, 4rem);
`;
