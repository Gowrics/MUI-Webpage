import React from 'react'
import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SendIcon from '@mui/icons-material/Send';


const top100Films = 
[
  { label: 'The Godfather', year: 1 },
  { label: 'Pulp Fiction', year: 2 },
];

const Typobuttonicon = () => {
  return (
    <>
    <Typography variant='h6' component='p'align='center' noWrap={true} gutterBottom={true} sx={{backgroundColor:'aliceblue', color:'red'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField{...params} label="Autocomplete" />}
    />
    <Button variant="text" onClick={()=>alert("hai hello,..." )}>Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button> <br/>  <br/> 
    <Button>Primary</Button>
    <Button disabled>Disabled</Button>
    <Button variant="contained" disableElevation>Contained</Button>
    <Button color='error' href="#text-buttons">Link</Button><br></br> 

    <Button variant="text" onClick={()=>alert("hai hello,..." )} >Text</Button><br/>
    <Button variant='container' sx={{
      backgroundColor:'gray',
      color:'yellowgreen',
      "&:hover":{ backgroundColor:'yellowgreen',
      color:'red',
      }
}}> container </Button><br/>

<Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
<Button variant='contained' startIcon={<SendIcon/>}>Send</Button>

<IconButton aria-label="delete">
  <DeleteIcon/>
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
 
</>

    )
}

export default Typobuttonicon