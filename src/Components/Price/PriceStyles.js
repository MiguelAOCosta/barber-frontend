import styled from "styled-components";

export const PriceSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem;
  place-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  height: 100%;
`;

export const PriceType = styled.h3`
  color: #fff;
  background: rgba(151, 79, 49, 0.85);
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  width: max-content;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  color: #111;
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TypeInfo = styled.p`
  position: relative;
  overflow: hidden;
  width: 100%;

  &::after {
    content: "--------------------------------------------------------";
    color: #999;
    position: absolute;
    margin-left: 5px;
    top: 0%;
  }
`;

export const PriceInfo = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: #974f31;
`;

export const Description = styled.p`
  color: #666;
`;
