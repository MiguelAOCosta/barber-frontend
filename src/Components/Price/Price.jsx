import React from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
} from "../../GlobalStyles";
import LogoImg from "../../Images/title.svg";
import {
  PriceSection,
  PriceContainer,
  PriceType,
  TypeContainer,
  Type,
  TypeInfo,
  PriceInfo,
  Description,
} from "./PriceStyles";

const Price = () => {
  return (
    <Section
      style={{
        backgroundColor: "#f9f9f9",
        borderTop: "2px solid #f1f1f1",
      }}
    >
      <SectionTitle style={{ marginBottom: "6rem" }}>
        <Title>Preços</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>
      </SectionTitle>

      <PriceSection>
        <PriceContainer>
          <PriceType>Cabelo</PriceType>
          <TypeContainer>
            <Type>
              <TypeInfo>Corte</TypeInfo>
              <PriceInfo>10€</PriceInfo>
            </Type>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, quas!
            </Description>
          </TypeContainer>
          <TypeContainer>
            <Type>
              <TypeInfo>Penteado</TypeInfo>
              <PriceInfo>12€</PriceInfo>
            </Type>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, quas!
            </Description>
          </TypeContainer>
        </PriceContainer>

        <PriceContainer>
          <PriceType>Barba</PriceType>
          <TypeContainer>
            <Type>
              <TypeInfo>Barber total</TypeInfo>
              <PriceInfo>5€</PriceInfo>
            </Type>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, quas!
            </Description>
          </TypeContainer>
          <TypeContainer>
            <Type>
              <TypeInfo>Barbear</TypeInfo>
              <PriceInfo>8€</PriceInfo>
            </Type>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, quas!
            </Description>
          </TypeContainer>
          <TypeContainer>
            <Type>
              <TypeInfo>Barbear soave</TypeInfo>
              <PriceInfo>10€</PriceInfo>
            </Type>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, quas!
            </Description>
          </TypeContainer>
        </PriceContainer>

        <PriceContainer>
          <PriceType>Tratamentos</PriceType>
          <TypeContainer>
            <Type>
              <TypeInfo>Limpeza facial</TypeInfo>
              <PriceInfo>15€</PriceInfo>
            </Type>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, quas!
            </Description>
          </TypeContainer>
        </PriceContainer>
      </PriceSection>
    </Section>
  );
};

export default Price;
