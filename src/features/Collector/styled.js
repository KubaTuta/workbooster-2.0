import styled from "styled-components";

export const Layout = styled.div`
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
