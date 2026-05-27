import B2C from "./features/B2C";
import Update from "./features/Update";
import { Bar, LinkDiv, StyledNavLink } from "./styles";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [plates, setPlates] = useState([]);

  return (
    <>
      <Bar>
        <LinkDiv>
          <StyledNavLink to="/main">
            Main
          </StyledNavLink>
        </LinkDiv>
        <LinkDiv>
          <StyledNavLink to="update">Update</StyledNavLink>
        </LinkDiv>
      </Bar>
      <Routes>
        <Route path="*" element={<B2C plates={plates} setPlates={setPlates}/>}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App;
