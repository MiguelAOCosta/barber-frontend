import styled from "styled-components";

export const FullImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.4s ease-in-out;
  z-index: 101;
`;

export const FullImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: all 0.5s ease-in-out;
`;

export const GalleryContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  place-items: center;
  place-content: center;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, 150px);
  }
`;

export const GalleryContent = styled.div`
  max-width: 250px;
  height: 250px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    max-width: 150px;
    height: 150px;
  }
`;

export const ImgGallery = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all 0.4s ease-in-out;

  &:hover {
    filter: grayscale(0%);
  }
`;
