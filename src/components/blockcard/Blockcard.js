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

const Blockcard = ({id, status, firstName, lastName, email}) => {
  
  const [open, setOpen] = React.useState(false);
  const [getEmail, setGetEmail] = React.useState('');
  const [blockPoolData, setBlockPoolData] = React.useState(blockdata100)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextUpdate = (e) => {
    setGetEmail(e.target.value)
    console.log(getEmail)
  }

  const claimBlock = () => {
    
    blockdata100.blocks[id-1].email=getEmail

    handleClose()
  }
  
  return (
    <div className="Blockcard">

    <Card>
      <CardActionArea onClick={handleClickOpen}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { status === "Open" ? status + id: email }
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
            type="text"
            value={getEmail}
            onChange={handleTextUpdate}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={claimBlock}>Claim Block</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default Blockcard