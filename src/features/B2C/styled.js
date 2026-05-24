import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(20, max-content);
  grid-gap: 5px;
  margin: 10px;
`;

export const Tile = styled.div`
  background-color: #076f4b;
  color: white;
  border-radius: 5px;
  //   transition: 0.5s;
  align-items: center;
  padding: 2px;
  //   word-break: break-word;
  //   min-width: 0;
  min-width: 0;
  width: 100%;
`;
