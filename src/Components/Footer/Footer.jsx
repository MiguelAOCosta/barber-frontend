import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterTitle,
  FooterInfo,
} from "./FooterStyles";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>Onde estou</FooterTitle>
        <FooterInfo>
          R. Eng. Adelino Amaro da Costa,
          <br />
          4400-134 Vila Nova de Gaia
        </FooterInfo>
        <FooterInfo>
          hello@gmail.com
          <br />
          +351 911 234 567
        </FooterInfo>
      </FooterContent>

      <FooterContent>
        <FooterTitle>Horário de funcionamento</FooterTitle>
        <FooterInfo>Segunda - Sexta: 8:00h - 19:00h</FooterInfo>
        <FooterInfo>Sábado: 9:00h - 14:00h</FooterInfo>
        <FooterInfo>Domingo: Fim dia semana</FooterInfo>
      </FooterContent>

      <FooterContent>
        <FooterTitle>Segue-me</FooterTitle>
        <FaFacebookSquare />
        <FaInstagramSquare />
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
