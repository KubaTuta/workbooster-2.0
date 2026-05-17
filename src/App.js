import { Bar, LinkDiv, StyledNavLink } from "./styles";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Bar>
        <LinkDiv>
          <StyledNavLink>Main</StyledNavLink>
        </LinkDiv>
        <LinkDiv>
          <StyledNavLink>Upload</StyledNavLink>
        </LinkDiv>
      </Bar>
      <Routes></Routes>
    </>
  );
}

export default App;
