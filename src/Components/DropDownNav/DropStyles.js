import styled from "styled-components";

export const DropContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 99;
  position: fixed;
  top: 0%;
  transform: scaleY(${({ isOpen }) => (isOpen ? "1" : "0")});
  transform-origin: top;
  transition: all 0.2s ease-in-out;
`;

export const NavBar = styled.ul`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding-top: 40px;
`;

export const NavLink = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    background: rgba(151, 79, 49, 0.5);
  }
`;
