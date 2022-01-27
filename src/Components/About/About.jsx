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
  Achievements,
  Achievement,
  AchievementImg,
  ImgAchieve,
  AchievementTitle,
  AchievementParagraph,
} from "./AboutStyles";
import LogoImg from "../../Images/title.svg";
import Navalha from "../../Images/navalha.svg";
import Tesoura from "../../Images/tesoura.svg";
import TesouraNavalha from "../../Images/tesoura-navalha.svg";

const About = () => {
  return (
    <Section>
      <SectionTitle>
        <Title>Sobre mim</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>

        <SectionParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui officiis
          quos quidem quisquam eligendi sed nihil porro earum accusantium
          dolorum?
        </SectionParagraph>
      </SectionTitle>

      <Achievements>
        <Achievement>
          <AchievementImg>
            <ImgAchieve src={Navalha} />
          </AchievementImg>
          <AchievementTitle>Lorem ipsum dolor sit amet.</AchievementTitle>
          <AchievementParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nesciunt, excepturi iste eius, facilis vitae, in eum soluta ullam
            eos reiciendis inventore deserunt dignissimos beatae facere ab
            laudantium a non.
          </AchievementParagraph>
        </Achievement>

        <Achievement>
          <AchievementImg>
            <ImgAchieve src={Tesoura} />
          </AchievementImg>
          <AchievementTitle>Lorem ipsum dolor sit amet.</AchievementTitle>
          <AchievementParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nesciunt, excepturi iste eius, facilis vitae, in eum soluta ullam
            eos reiciendis inventore deserunt dignissimos beatae facere ab
            laudantium a non.
          </AchievementParagraph>
        </Achievement>

        <Achievement>
          <AchievementImg>
            <ImgAchieve src={TesouraNavalha} />
          </AchievementImg>
          <AchievementTitle>Lorem ipsum dolor sit amet.</AchievementTitle>
          <AchievementParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nesciunt, excepturi iste eius, facilis vitae, in eum soluta ullam
            eos reiciendis inventore deserunt dignissimos beatae facere ab
            laudantium a non.
          </AchievementParagraph>
        </Achievement>
      </Achievements>
    </Section>
  );
};

export default About;
