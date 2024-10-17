import { AppBar, Avatar, Badge, Box, IconButton, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const NavBar = ({ onGalleryClick }) => {
  return (
    <AppBar position='sticky' sx={{ mb: 2 }}>
      <StyledToolBar>
        <Typography variant='h5'>Tours</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Badge badgeContent={4} color="secondary"><MailIcon color="action" /></Badge>
          <Badge badgeContent={4} color="error"><NotificationsActiveIcon color='action' /></Badge>
          <IconButton onClick={onGalleryClick} sx={{ display: { xs: 'block', sm: 'none' } }}>
            <PhotoLibraryIcon color="action" />
          </IconButton>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
        </Box>
      </StyledToolBar>
    </AppBar>
  )
}

export default NavBar;
