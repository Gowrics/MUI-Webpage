import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ButtonNavigation = () => {
  return (
    <div>
<Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={'Recent'}>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon/>} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>

    </div>
  )
}

export default ButtonNavigation