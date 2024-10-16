import styled from "styled-components";

export const Card = styled.div`
  width: 220px;
  border: 0.2px solid lightgray;
  margin: 15px 15px 15px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
export const CardHeader = styled.div`
  width: 80%;
  padding: 5px;
  display: grid;
  place-items: center;
  align-self: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;
export const CardBody = styled.div`
  padding: 0px 10px;
`;

export const Title = styled.h4``;
export const Price = styled.p``;

export const Button = styled.button`
  background-color: white;
  border: 1px solid;
  padding: 8px 10px;
  color: black;
  border-radius: 5px;
  margin-bottom: 15px;

  &:active {
    transform: scale(0.95);
  }
  &:hover {
    cursor: pointer;
  }
`;
