import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import  FavoriteIcon from '@mui/icons-material/Favorite'
import {red} from '@mui/material/colors'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Tourcard = () => {
  return (
    <div>
            <Card sx={{ maxWidth: 700, marginBottom:'20px'}}>
      <CardHeader  title="A Perfect Holiday Spot"/>
      <CardMedia
        component="img"
        height="194"
        image={require('../assets/1.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>   
        <Rating name="simple-controlled" value={4}/>
   </CardActions>
    </Card>
    <Card sx={{ maxWidth: 700, marginBottom:'20px'}}>
      <CardHeader  title="A Perfect Holiday Spot"/>
      <CardMedia
        component="img"
        height="194"
        image={require('../assets/1.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> 
        <Rating name="simple-controlled" value={4}/>

             </CardActions>
    </Card>

    <Card sx={{ maxWidth: 700, marginBottom:'20px'}}>
      <CardHeader  title="A Perfect Holiday Spot"/>
      <CardMedia
        component="img"
        height="194"
        image={require('../assets/1.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>  
        <Rating name="simple-controlled" value={4}/>
            </CardActions>
    </Card>
    <Card sx={{ maxWidth: 700, marginBottom:'20px'}}>
      <CardHeader  title="A Perfect Holiday Spot"/>
      <CardMedia
        component="img"
        height="194"
        image={require('../assets/1.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>   
        <Rating name="simple-controlled" value={4}/>
   </CardActions>
    </Card>
    <Card sx={{ maxWidth: 700, marginBottom:'20px'}}>
      <CardHeader  title="A Perfect Holiday Spot"/>
      <CardMedia
        component="img"
        height="194"
        image={require('../assets/1.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>   
        <Rating name="simple-controlled" value={4}/>
   </CardActions>
    </Card>
    </div>
  ) 
}

export default Tourcard 