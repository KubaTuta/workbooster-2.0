import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(20, minmax(0, auto));
  width: max-content;
  grid-gap: 5px;
  margin: 10px;
`;

export const Tile = styled.div`
  background-color: #076f4b;
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

export const Tooltip = styled.div`
  font-size: 26px;
  border: 3px solid black;
  position: fixed;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  transform: translateY(-100%);
  background: #076f4b;
  color: white;
  padding: 5;
  zindex: 9999;
  padding: 5px;
  border-radius: 10px;
`;
