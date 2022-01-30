import styled, { keyframes } from "styled-components";

export const SectionForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.form`
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 300px));
  place-content: center;
  grid-gap: 1rem;
  grid-row-gap: 3rem;
`;

export const BtnForm = styled.button`
  background: rgba(151, 79, 49, 0.8);
  border: none;
  border: 2px solid#974f31;
  border-radius: 3px;
  width: max-content;
  padding: 0.5rem 3rem;
  color: #fff;
  cursor: pointer;
  z-index: 0;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SubmitForm = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const Ring = keyframes`
  0%{
    transform: rotate(0deg);
    box-shadow:1px 2px 1px #974f31;
  }
  50%{
    transform: rotate(180deg);
    box-shadow:1px 2px 1px #974f31;
  }
  100%{
    transform: rotate(360deg);
    box-shadow:1px 2px 1px #974f31;
  }
`;

export const Waiting = styled.div`
  margin-left: 1rem;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  animation: ${Ring} 2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;
