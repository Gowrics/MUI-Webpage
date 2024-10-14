import { AppBar, Avatar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const StyledToolBar =styled(Toolbar)({
display:'flex',
justifyContent:'space-between'

})

const NavBar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h5'>Tours</Typography>
            <Box sx={{
            display:'flex',alignItems:'center', gap:'20px'  }}> 
            <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
            <NotificationsActiveIcon color='action'/>
            </Badge>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
            </Box>
        </StyledToolBar>


    </AppBar>
 

)
}

export default NavBar