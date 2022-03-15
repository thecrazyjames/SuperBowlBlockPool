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

const Blockcard = (id) => {
  
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [cardData, setCardData] = React.useState({
    blocknumber: id,
    userStatus: "Open",
    userFirstName: "",
    userLastName: "",
    userEmail: ""
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(cardData)
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
    console.log(cardData)
  };

  const handleInputChange = (e) => {
    setCardData({...cardData,
      [e.target.name]: e.target.value
    })
      console.log(cardData);
    
  }

  const handleStatusCancel = () => {
    setCardData({
      ...cardData,
      userStatus: "Open",
      userFirstName: "",
      userLastName: "",
      userEmail: ""
    })
    handleClose();
    console.log(cardData)
  }

  const handleStatusCancel2 = () => {
    setCardData({
      ...cardData,
      userStatus: "Open",
      userFirstName: "",
      userLastName: "",
      userEmail: ""
    })
    handleClose2();
    console.log(cardData)
  }

  const handleStatusClaim = () => {
    setCardData({
      ...cardData,
      userStatus: "Closed",
      
    })
    handleClose();
    console.log(cardData)
  }

  return (
    <div className="Blockcard">
    {/* { cardData.userStatus === "Closed" ? "css-46bh2p-MuiCardContent-root statusClosed" :"Blockcard"}> */}

    {/* Clickable "Card" which reserves a block for you */}

    <Card >
      <CardActionArea onClick={cardData.userStatus === "Open" ? handleClickOpen : handleClickOpen2}>
      <CardContent className='cardContent'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { cardData.userStatus === "Open" ? cardData.userStatus + " " + cardData.blocknumber.id : cardData.userFirstName[0]+ ". " + cardData.userLastName.substring(0, 5) }
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>

    {/* Dialog for entering in information to claim a block that was clicked on */}
    
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To claim BLOCK before anyone else, please enter your information and click "Claim Block"
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="emailaddress"
            label="Email Address"
            type="email"
            name="userEmail"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="userFirstName"
            label="First Name"
            type="text"
            name="userFirstName"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="userLastName"
            label="Last Name"
            type="text"
            name="userLastName"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleStatusCancel}>Cancel</Button>
          <Button onClick={handleStatusClaim}>Claim Block</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog Box for Checking the Reservation Info and an option to cancel the block */}

      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle>This Block is Reserved By:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            First Name: {cardData.userFirstName}
          </DialogContentText>
          <DialogContentText>
            Last Name: {cardData.userLastName}
          </DialogContentText>
          <DialogContentText>
            Email: {cardData.userEmail}
          </DialogContentText>
          <br></br>
          <DialogContentText>
            Would you like to cancel this block reservation?
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Keep Reservation</Button>
          <Button onClick={handleStatusCancel2}>Yes, Cancel the Reservation</Button>
          
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default Blockcard