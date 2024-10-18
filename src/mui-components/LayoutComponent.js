import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'

const LayoutComponent = () => {
  return (
    <div>
        <Container maxWidth='lg'>
        <container >
        <Box sx={{
            backgroundColor:'yellowgreen'  }}>Hai</Box> </container>
            <hr></hr>
            <Grid container spacing={2}>
  <Grid item xs={4}>
    <Button  variant='contained' sx={{width:'100%'}}> xs=4</Button>
  </Grid>
  <Grid item xs={4}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=4</Button>
  </Grid>
  <Grid item xs={4}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=4</Button>
  </Grid>
  <Grid item xs={8}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=8</Button>
  </Grid>  
  
  <Grid item xs={8}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=8</Button>
  </Grid>  
  <Grid item xs={8}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=8</Button>
  </Grid>  
  <Grid item xs={8}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=8</Button>
  </Grid>  
</Grid>
<br></br>
</Container>
<Container maxWidth={'sm'} >
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Button  variant='contained' sx={{width:'100%'}}> xs=4</Button>
  </Grid>
  <Grid item xs={8}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=4</Button>
  </Grid>
  <Grid item xs={8}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=4</Button>
  </Grid>
  <Grid item xs={8}>
  <Button  variant='contained' sx={{width:'100%'}}>xs=8</Button>
  </Grid>
</Grid>

</Container>

    </div>
  )
}

export default LayoutComponent