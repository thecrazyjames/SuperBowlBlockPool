import React from 'react'

import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, TextField } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import blockdata100 from '../../utils/blockdata100.js'

const Blockcard = ({id, status, firstName, lastName}) => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const claimBlock = () => {
    


    handleClose()
  }
  
  return (
    <div className="Blockcard">

    <Card>
      <CardActionArea onClick={handleClickOpen}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { status == "Open" ? status + id: firstName + " " + lastName }
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To claim BLOCK {id} before anyone else, please enter your information and click "Claim Block"
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="emailaddress"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Claim Block</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default Blockcard