import React from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
  SectionParagraph,
} from "../../GlobalStyles";
import {
  ServicesSection,
  ImgSection,
  ServicesContainer,
  ServicesContent,
  ServiceInfo,
  ServiceTitle,
  ServiceParagraph,
  ServiceImg,
  ImgService,
} from "./ServicesStyles";
import LogoImg from "../../Images/title.svg";
import ServicesImg from "../../Images/services.png";
import Tesoura from "../../Images/tesoura.svg";

const Services = () => {
  return (
    <Section
      style={{
        backgroundColor: "#f9f9f9",
        borderTop: "2px solid #f1f1f1",
        padding: "6rem 2rem 0 2rem",
      }}
    >
      <SectionTitle>
        <Title>Serviços</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>

        <SectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis
          voluptatem nemo aliquid possimus odit earum, neque ad magni sapiente,
          distinctio excepturi veniam sequi tenetur dolores consequatur minus
          officiis vitae?
        </SectionParagraph>
      </SectionTitle>

      <ServicesSection>
        <ServicesContainer>
          <ServicesContent>
            <ServiceInfo style={{ textAlign: "right" }}>
              <ServiceTitle>Corte de cabelo</ServiceTitle>
              <ServiceParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                architecto omnis accusamus ipsam! Vel, assumenda!
              </ServiceParagraph>
            </ServiceInfo>
            <ServiceImg style={{ marginLeft: "1rem" }}>
              <ImgService src={Tesoura} />
            </ServiceImg>
          </ServicesContent>

          <ServicesContent>
            <ServiceInfo style={{ textAlign: "right" }}>
              <ServiceTitle>Lavagem de cabelo</ServiceTitle>
              <ServiceParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                architecto omnis accusamus ipsam! Vel, assumenda!
              </ServiceParagraph>
            </ServiceInfo>
            <ServiceImg style={{ marginLeft: "1rem" }}>
              <ImgService src={Tesoura} />
            </ServiceImg>
          </ServicesContent>
        </ServicesContainer>

        <ImgSection src={ServicesImg} />

        <ServicesContainer>
          <ServicesContent>
            <ServiceImg style={{ marginRight: "1rem" }}>
              <ImgService src={Tesoura} />
            </ServiceImg>
            <ServiceInfo style={{ textAlign: "left" }}>
              <ServiceTitle>Hair Styling</ServiceTitle>
              <ServiceParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                architecto omnis accusamus ipsam! Vel, assumenda!
              </ServiceParagraph>
            </ServiceInfo>
          </ServicesContent>

          <ServicesContent>
            <ServiceImg style={{ marginRight: "1rem" }}>
              <ImgService src={Tesoura} />
            </ServiceImg>
            <ServiceInfo style={{ textAlign: "left" }}>
              <ServiceTitle>Corte de Barba</ServiceTitle>
              <ServiceParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                architecto omnis accusamus ipsam! Vel, assumenda!
              </ServiceParagraph>
            </ServiceInfo>
          </ServicesContent>
        </ServicesContainer>
      </ServicesSection>
    </Section>
  );
};

export default Services;
