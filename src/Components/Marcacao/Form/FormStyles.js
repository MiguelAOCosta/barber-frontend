import styled, { keyframes } from "styled-components";

export const AppointmentForm = styled.form`
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 300px));
  place-content: center;
  grid-gap: 1rem;
  grid-row-gap: 5rem;
`;

export const Form = styled.div`
  display: flex;
  border-bottom: 1px solid #999;
  max-width: 300px;
  position: relative;
`;

export const InputForm = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  width: 100%;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const Selectable = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const InfoSlected = styled.span`
  color: #fff;
`;

export const Select = styled.div`
  position: absolute;
  background-color: #212121;
  border: 1px solid #333;
  padding: 0.5rem;
  z-index: 10;
  width: 100%;
  text-align: center;
`;

export const List = styled.ul`
  color: #999;
  list-style: none;
`;

export const Item = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:hover {
    background-color: #974f31;
    color: #fff;
  }
`;

export const SubmitForm = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
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
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
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
