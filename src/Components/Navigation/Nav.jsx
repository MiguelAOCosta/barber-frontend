import React from "react";
import { FaBars } from "react-icons/fa";
import {
  NavContainer,
  LogoContainer,
  Logo,
  ImgLogo,
  NavContent,
  NavBar,
  NavLink,
  Bars,
} from "./NavStyles";
import LogoImg from "../../Images/title.svg";

const Nav = ({ isOpen, toogle }) => {
  return (
    <NavContainer isOpen={isOpen}>
      <LogoContainer>
        <Logo>Barbudo</Logo>
        <ImgLogo src={LogoImg} alt="" />
      </LogoContainer>

      <NavContent>
        <NavBar>
          <NavLink>Sobre Mim</NavLink>
          <NavLink>Serviços</NavLink>
          <NavLink>Barbeiros</NavLink>
          <NavLink>Galeria</NavLink>
          <NavLink>Preços</NavLink>
          <NavLink>Contactos</NavLink>
        </NavBar>
      </NavContent>

      <Bars>
        <FaBars onClick={toogle} />
      </Bars>
    </NavContainer>
  );
};

export default Nav;
