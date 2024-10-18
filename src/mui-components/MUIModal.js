import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import reptail from '../assets/reptail.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const SimpleModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Reptail</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={{ ...style, width: 400 }}>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          <Card>
            <CardMedia sx={{ height: 140 }} image={reptail} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Lizard</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default SimpleModal;
