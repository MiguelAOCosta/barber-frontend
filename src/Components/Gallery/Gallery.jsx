import React, { useState } from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
} from "../../GlobalStyles";
import {
  FullImgContainer,
  FullImg,
  GalleryContainer,
  GalleryContent,
  ImgGallery,
} from "./GalleryStyles";
import { GalleryImg } from "./GalleryData";
import LogoImg from "../../Images/title.svg";
import { IoMdClose } from "react-icons/io";

const Gallery = () => {
  const [imgOpen, setImgOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState();

  function getImg(img) {
    setImgSrc(img);
    setImgOpen(true);
  }

  return (
    <Section>
      <SectionTitle style={{ marginBottom: "6rem" }}>
        <Title>Galeria</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>
      </SectionTitle>

      <FullImgContainer
        onClick={() => setImgOpen(false)}
        style={{
          visibility: `${imgOpen ? "visible" : "hidden"}`,
          opacity: `${imgOpen ? "1" : "0"}`,
        }}
      >
        <FullImg
          src={imgSrc}
          style={{ transform: `${imgOpen ? "scale(1)" : "scale(0)"}` }}
        />
        <IoMdClose
          onClick={() => setImgOpen(false)}
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            color: "#fff",
            fontSize: "2rem",
            cursor: "pointer",
            zIndex: "102",
          }}
        />
      </FullImgContainer>

      <GalleryContainer>
        {GalleryImg.map((img, index) => {
          return (
            <GalleryContent key={index} onClick={() => getImg(img.img)}>
              <ImgGallery src={img.img} />
            </GalleryContent>
          );
        })}
      </GalleryContainer>
    </Section>
  );
};

export default Gallery;
