import { Container, Stack } from "@mui/material";
import React from "react";
import Content from "./components/Content";
import RightBar from "./components/RightBar";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function App() {
  return (
<>    <NavBar/>
    <Container maxWidth='xl'>
    <Stack direction="row" spacing={2}justifyContent={"space-between"} >
      <Menu/>
      <Content/>
      <RightBar/>
  </Stack>   
  </Container>
  </>

  );
}

export default App;
