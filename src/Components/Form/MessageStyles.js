import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

export const Box = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const InfoMessage = styled.p``;

export const Btn = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #974f31;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
`;
