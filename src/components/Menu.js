import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ListOutlined from '@mui/icons-material/ListOutlined';
import Explore from '@mui/icons-material/Explore';
import Accessibility from '@mui/icons-material/Accessibility';
import Place from '@mui/icons-material/Place';
import LocalActivity from '@mui/icons-material/LocalActivity';
import Info from '@mui/icons-material/Info';

const Menu = () => {
  const listItemTextStyle = { display: { xs: 'none', sm: 'block' } }; // Common style for all ListItemText

  return (
    <Box  flex={0.6}>
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
  );
};

export default Menu;
