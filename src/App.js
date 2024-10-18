import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Content from "./components/Content";
import RightBar from "./components/RightBar";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false); // State to manage Menu visibility
  const [rightBarOpen, setRightBarOpen] = useState(false); // State to manage RightBar visibility
  const darktheme = createTheme({
    palette: {
      mode: theme,
    },
    typography: {
      fontFamily: 'Poppins',
      fontWeightLight: 400,
      fontWeightMedium: 600,
      fontWeightRegular: 500,
      fontWeightBold: 500,
    },
  });

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleGalleryClick = () => {
    setRightBarOpen(prev => !prev);
  };

  const handleGalleryClose = () => {
    setRightBarOpen(false);
  };

  return (
    <ThemeProvider theme={darktheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar handleMenuToggle={handleMenuToggle} onGalleryClick={handleGalleryClick} /> {/* Pass the handleGalleryClick to NavBar */}
        <Container maxWidth='xl'>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Menu open={menuOpen} handleClose={handleMenuClose} /> {/* Use menuOpen state here */}
          <Content />
            <RightBar open={rightBarOpen} handleClose={handleGalleryClose} /> {/* Pass the open state and handleClose to RightBar */}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
