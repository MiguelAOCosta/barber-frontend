import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  height: 55px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #974f31;
`;

export const Logo = styled.h2`
  letter-spacing: 3px;
`;

export const ImgLogo = styled.img`
  width: 50px;
  margin-top: -5px;
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentInfo = styled.p`
  margin-left: 1rem;
  font-size: 0.9rem;
`;
