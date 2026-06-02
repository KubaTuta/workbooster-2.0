import styled from "styled-components";

export const Row = styled.div`
  display: contents;
`;

export const Tile = styled.div`
  // background-color: #14513c;
  background-color: ${({isEven})=> isEven ? "#093f45"  : "#0d5860"};
  font-size: 15px;
  color: white;
  border-radius: 5px;
  align-items: center;
  padding: 2px;
  max-width: 100px;
  min-width: 0px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  background-color: #14513c;
  cursor: pointer;
  font-size: 15px;
  color: white;
  border-radius: 5px;
  align-items: center;
  padding: 2px;
  max-width: 100px;
  min-width: 0px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Details = styled.div`
  grid-column: 1 / -1;
  background: #1b263b;
  color: white;
  padding: 20px;
  margin-bottom: 5px;
`;
