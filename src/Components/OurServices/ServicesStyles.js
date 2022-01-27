import styled from "styled-components";

export const ServicesSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 950px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgSection = styled.img`
  width: 30%;
  filter: grayscale(100%);

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0;
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceTitle = styled.h4`
  color: #111;
`;

export const ServiceParagraph = styled.p`
  color: #333;
  max-width: 300px;
  font-size: 0.9rem;
`;

export const ServiceImg = styled.div`
  border: 1px solid #974f31;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgService = styled.img`
  width: 35px;
`;
