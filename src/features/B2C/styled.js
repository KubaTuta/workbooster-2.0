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
`;
