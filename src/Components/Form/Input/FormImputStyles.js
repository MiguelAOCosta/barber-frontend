import styled from "styled-components";

export const InputForm = styled.div``;

export const Label = styled.label`
  color: #999;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border: 1px solid #999;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  font-size: 1rem;
  padding: 10px;
  margin: 10px 0;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:focus {
    outline: none;
  }

  &:invalid:not([value=""]) {
    border: 1px solid #cc0000;
  }

  &:invalid:not([value=""]) ~ span {
    opacity: 1;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.9rem;
  color: #cc0000;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

export const SelectHour = styled.div`
  background-color: #212121;
  border: 1px solid #333;
  padding: 0.5rem;
  z-index: 10;
  text-align: center;
  position: absolute;
  border-radius: 5px;
  transform: scale(${({ inputHour }) => (inputHour ? "1" : "0")});
  transform-origin: top left;
  transition: transform 0.2s ease-in-out;
`;

export const List = styled.ul`
  color: #999;
  list-style: none;
`;

export const Item = styled.li`
  padding: 0.5rem 5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:hover {
    background-color: #974f31;
    color: #fff;
  }
`;
