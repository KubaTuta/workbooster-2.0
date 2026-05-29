import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(21, minmax(0, auto));
  width: max-content;
  grid-gap: 5px;
  margin: 10px;
`;

export const Header = styled.div`
  background-color: #7f6027;
  text-align: center;
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

export const Tile = styled.div`
  // background-color: #14513c;
  background-color: #093f45;
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

export const Tooltip = styled.div`
  font-size: 26px;
  border: 3px solid black;
  position: fixed;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  transform: translateY(-100%);
  background: #031f33;
  color: white;
  z-index: 9999;
  padding: 5px;
  border-radius: 10px;
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
