import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share';

const Tourcard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 700, marginTop: 3, marginBottom: '20px' }}>
        <CardHeader title="A Perfect Holiday Spot" />
        <CardMedia
          component="img"
          height={'100'}
          sx={{
            width: '100%',           // Make it responsive to fit the container
            height: { xs: 'auto', sm: '194px' },  // Set auto height for mobile, fixed for larger screens
          }}
          image={require('../assets/1.jpg')}
          alt="Holiday Spot"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      {/* Repeat for other cards */}
      <Card sx={{ maxWidth: 700, marginBottom: '20px' }}>
        <CardHeader title="A Perfect Holiday Spot" />
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: { xs: 'auto', sm: '194px' },  // Same responsive styles here
          }}
          image={require('../assets/2.jpg')}
          alt="Holiday Spot"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 700, marginTop: 3, marginBottom: '20px' }}>
        <CardHeader title="A Perfect Holiday Spot" />
        <CardMedia
          component="img"
          height={'100%'}
          sx={{
            width: '100%',           // Make it responsive to fit the container
            height: { xs: 'auto', sm: '194px' },  // Set auto height for mobile, fixed for larger screens
          }}
          image={require('../assets/3.jpg')}
          alt="Holiday Spot"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 700, marginTop: 3, marginBottom: '20px' }}>
        <CardHeader title="A Perfect Holiday Spot" />
        <CardMedia
          component="img"
          height={'100%'}
          sx={{
            width: '100%',           // Make it responsive to fit the container
            height: { xs: 'auto', sm: '194px' },  // Set auto height for mobile, fixed for larger screens
          }}
          image={require('../assets/4.jpg')}
          alt="Holiday Spot"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 700, marginTop: 3, marginBottom: '20px' }}>
        <CardHeader title="A Perfect Holiday Spot" />
        <CardMedia
          component="img"
          height={'100%'}
          sx={{
            width: '100%',           // Make it responsive to fit the container
            height: { xs: 'auto', sm: '194px' },  // Set auto height for mobile, fixed for larger screens
          }}
          image={require('../assets/5.jpg')}
          alt="Holiday Spot"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 700, marginTop: 3, marginBottom: '20px' }}>
        <CardHeader title="A Perfect Holiday Spot" />
        <CardMedia
          component="img"
          height={'100%'}
          sx={{
            width: '100%',           // Make it responsive to fit the container
            height: { xs: 'auto', sm: '194px' },  // Set auto height for mobile, fixed for larger screens
          }}
          image={require('../assets/6.jpg')}
          alt="Holiday Spot"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 700, marginTop: 3, marginBottom: '20px' }}>
        <CardHeader title="A Perfect Holiday Spot" />
        <CardMedia
          component="img"
          height={'100%'}
          sx={{
            width: '100%',           // Make it responsive to fit the container
            height: { xs: 'auto', sm: '194px' },  // Set auto height for mobile, fixed for larger screens
          }}
          image={require('../assets/1.jpg')}
          alt="Holiday Spot"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>
   </div>
  )
}

export default Tourcard;
