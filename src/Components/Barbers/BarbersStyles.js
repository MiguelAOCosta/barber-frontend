import styled from "styled-components";

export const BarberSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-gap: 1rem;
  place-content: center;
`;

export const Barber = styled.div`
  max-width: 250px;
  height: 300px;
  position: relative;
  transition: all 0.4s ease-in-out;

  &:hover img {
    filter: grayscale(100%);
  }

  &:hover div {
    transform: scaleY(1);
  }
`;

export const ImgBarber = styled.img`
  width: 250px;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
`;

export const BarberInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(151, 79, 49, 0.6);
  color: #fff;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: all 0.4s ease;
`;

export const BarberName = styled.h3`
  margin-bottom: 0.5rem;
`;

export const BarberLevel = styled.p`
  font-size: 0.9rem;
  font-style: italic;
`;
