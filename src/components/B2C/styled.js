import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(21, minmax(0, auto));
  width: max-content;
  grid-gap: 5px;
  margin: 10px;
`;

export const Header = styled.div`
  position: sticky;
  top: 5px;
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

export const Row = styled.div`
  display: contents;
`;

export const Tile = styled.div`
  background: linear-gradient(to bottom, #0d5961, #093f45);

  box-shadow: ${({ iseven }) =>
    iseven
      ? `0 3px 6px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)`
      : `0 3px 6px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)`};
  border-radius: 6px;
  background: ${({ iseven }) =>
    iseven
      ? `linear-gradient(to bottom, #0d5961, #093f45)`
      : `linear-gradient(to bottom, #13707a, #0d5860)`};
  font-size: 15px;
  font-weight: 200;
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

  &:active {
  transform: translateY(2px);
  box-shadow:
    inset 0 2px 6px rgba(0,0,0,0.5);
}
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

export const CollectorLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Frame = styled.div`
  display: flex;
`;

export const TextWindow = styled.textarea`
  height: 300px;
  width: 500px;
`;

export const ConfirmationButton = styled.button`
  color: white;
  background: black;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.7);
  }
`;
