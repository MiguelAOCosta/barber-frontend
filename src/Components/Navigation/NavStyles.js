import styled from "styled-components";

export const NavContainer = styled.header`
  width: 100%;
  height: 60px;
  background: ${({ isOpen }) =>
    isOpen ? "rgba(21, 21, 21, 1)" : "rgba(21, 21, 21, 0.3)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
  z-index: 100;
  transition: all 0.2s ease-in-out 0.1s;
`;

export const LogoContainer = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #974f31;
    padding-left: 2rem;
  }
`;

export const Logo = styled.h2`
  letter-spacing: 3px;
`;

export const ImgLogo = styled.img`
  width: 50px;
  margin-top: -5px;
`;

export const NavContent = styled.nav`
  width: 100%;
  height: 100%;
  color: #fff;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavBar = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const NavLink = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    background: rgba(151, 79, 49, 0.5);
    color: #000;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #974f31;
    }
  }
`;

export const Bars = styled.div`
  color: #fff;
  margin-right: 2rem;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;
