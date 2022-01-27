import styled from "styled-components";
import bgImg from "../../Images/cta.jpg";

export const CtaContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 1rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const CtaSlogan = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 3rem);
  z-index: 1;
`;
