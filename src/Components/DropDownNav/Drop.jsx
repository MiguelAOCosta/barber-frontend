import React from "react";
import { DropContainer, NavBar, NavLink } from "./DropStyles";

const Drop = ({ isOpen, toogle }) => {
  return (
    <DropContainer isOpen={isOpen}>
      <NavBar>
        <NavLink onClick={toogle}>Sobre Mim</NavLink>
        <NavLink onClick={toogle}>Serviços</NavLink>
        <NavLink onClick={toogle}>Barbeiros</NavLink>
        <NavLink onClick={toogle}>Galeria</NavLink>
        <NavLink onClick={toogle}>Preços</NavLink>
        <NavLink onClick={toogle}>Contactos</NavLink>
      </NavBar>
    </DropContainer>
  );
};

export default Drop;
