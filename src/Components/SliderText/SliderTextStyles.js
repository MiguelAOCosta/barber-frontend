import styled from "styled-components";
import BgSliderImg from "../../Images/sliderTextBg.jpg";

export const SliderTextContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BgSliderImg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(22, 22, 22, 0.8);
  }
`;

export const SliderContent = styled.div`
  padding: 0 0.5rem;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const SliderContentText = styled.p`
  font-size: clamp(1.7rem, 3vw, 4rem);
  margin-bottom: 2rem;
`;

export const SliderAuthor = styled.p`
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  font-style: italic;
`;
