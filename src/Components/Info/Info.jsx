import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import {
  InfoContainer,
  LogoContainer,
  Logo,
  ImgLogo,
  InfoContent,
  ContentInfo,
} from "./InfoStyles";
import LogoImg from "../../Images/title.svg";

const Info = () => {
  return (
    <InfoContainer>
      <LogoContainer>
        <Logo>Barbudo</Logo>
        <ImgLogo src={LogoImg} alt="" />
      </LogoContainer>

      <InfoContent>
        <FaPhoneAlt style={{ color: "#974f31" }} />
        <ContentInfo>+351 911 234 567</ContentInfo>
      </InfoContent>

      <InfoContent>
        <FaMapMarkerAlt style={{ color: "#974f31" }} />
        <ContentInfo>
          R. Eng. Adelino Amaro da Costa,
          <br />
          4400-134 Vila Nova de Gaia
        </ContentInfo>
      </InfoContent>

      <InfoContent>
        <FaRegClock style={{ color: "#974f31" }} />
        <ContentInfo>
          Dom - Seg
          <br />
          9:00h - 19:00h
        </ContentInfo>
      </InfoContent>
    </InfoContainer>
  );
};

export default Info;
