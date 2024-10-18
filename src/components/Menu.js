import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal } from '@mui/material';
import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ListOutlined from '@mui/icons-material/ListOutlined';
import Explore from '@mui/icons-material/Explore';
import Accessibility from '@mui/icons-material/Accessibility';
import Place from '@mui/icons-material/Place';
import LocalActivity from '@mui/icons-material/LocalActivity';
import Info from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
const Menu = ({ open, handleClose }) => {
  const listItemTextStyle = { display: { xs: 'none', sm: 'block' } }; // Common style for all ListItemText

  return (
    <>
     <Modal
        open={open} 
        onClose={handleClose} 
        sx={{ 
          display: { xs: 'flex', sm: 'none' }, 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Box color={'white'}
          sx={{ 
            width: '80%',
            height:'800px', 
            maxWidth: '400px', 
            bgcolor: '#333333', 
            boxShadow: 24, 
            p: 2,
            borderRadius: 2, // Rounded corners for better aesthetics
            mt: 2, // Added margin at the top
            mb: 2, // Added margin at the bottom
            maxHeight: '90vh', // Ensure it does not exceed viewport height
            position: 'relative' // Ensure relative position for close button
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ 
              position: 'absolute',
              top: 8,
              right: 2,
            }}
          >
            <CloseIcon />
          </IconButton>
          <List  sx={{ pt: 5 }} > 
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText  primary="Plan Your Trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListOutlined />
              </ListItemIcon>
              <ListItemText 
               primary="Things To Do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText  primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Accessibility />
              </ListItemIcon>
              <ListItemText  sx={{ pt: 2 }}  primary="Facts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Place />
              </ListItemIcon>
              <ListItemText  primary="Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivity />
              </ListItemIcon>
              <ListItemText  primary="Tickets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText  primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
      
        </Box>
      </Modal>

    <Box  flex={0.6} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" color={'white'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText sx={listItemTextStyle} primary="Plan Your Trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListOutlined />
              </ListItemIcon>
              <ListItemText sx={listItemTextStyle} primary="Things To Do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText sx={listItemTextStyle} primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Accessibility />
              </ListItemIcon>
              <ListItemText sx={listItemTextStyle} primary="Facts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Place />
              </ListItemIcon>
              <ListItemText sx={listItemTextStyle} primary="Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivity />
              </ListItemIcon>
              <ListItemText sx={listItemTextStyle} primary="Tickets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText sx={listItemTextStyle} primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
    </>
  );
};

export default Menu;
