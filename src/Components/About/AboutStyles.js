import styled from "styled-components";

export const Achievements = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const Achievement = styled.div`
  max-width: 300px;
  padding: 4rem 1rem;
  background-color: #f0f0f0;
  border: 2px solid #d8d8d8;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:nth-child(1) {
    margin-bottom: 5rem;
  }

  &:nth-child(2) {
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 1100px) {
    &:nth-child(1) {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      margin-bottom: 0;
    }
  }
`;

export const AchievementImg = styled.div`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border: 2px solid #974f31;
  border-radius: 50%;
  position: absolute;
  bottom: 100%;
  transform: translateY(50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgAchieve = styled.img`
  width: 75px;
`;

export const AchievementTitle = styled.h4`
  color: #111;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 2px;
    background-color: #974f31;
  }
`;

export const AchievementParagraph = styled.p`
  color: #333;
  text-align: center;
  margin-top: 2rem;
`;
