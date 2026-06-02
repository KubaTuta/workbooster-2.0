import styled from "styled-components";

export const Row = styled.div`
  display: contents;
`;

export const Tile = styled.div`
  background: linear-gradient(to bottom, #0d5961, #093f45);

  box-shadow: ${({ isEven }) =>
    isEven
      ? `0 3px 6px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)`
      : `0 3px 6px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)`};
  border-radius: 6px;
  background: ${({ isEven }) =>
    isEven
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
