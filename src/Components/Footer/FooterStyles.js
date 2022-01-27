import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background-color: #d8d8d8;
  color: #111;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  place-items: center;
`;

export const FooterContent = styled.div`
  height: 100%;
  text-align: center;

  & svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:nth-child(2) {
      margin-right: 0.5rem;
    }

    &:hover {
      color: #974f31;
    }
  }
`;

export const FooterTitle = styled.h3`
  color: #974f31;
  margin-bottom: 1rem;
`;

export const FooterInfo = styled.p`
  margin-bottom: 1rem;
`;
