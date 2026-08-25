import styled from "styled-components";

export const FileGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(400px, 600px);
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

export const FileCard = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 15px;
  border: 5px solid black;
  padding: 30px;
`;

export const InputButton = styled.input`
  &::file-selector-button {
    color: white;
    background-color: black;
    cursor: pointer;
    padding: 10px 10px;
    transition: transform 0.2s ease;
  }
  &::file-selector-button:hover {
    transform: scale(1.1);
  }
`;
