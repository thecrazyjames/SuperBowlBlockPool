import React from 'react'
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

import Blockcard from '../blockcard/Blockcard';
import blockdata100 from "../../utils/blockdata100.js"




const Blockpool = () => {

  const [blockPoolData, setBlockPoolData] = React.useState(blockdata100)
  // const [open, setOpen] = React.useState(false);
  // const [getEmail, setGetEmail] = React.useState('');

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleTextUpdate = (e) => {
  //   setGetEmail(e.target.value)
  //   console.log(getEmail)
  // }

  // const claimBlock = () => {
    
  //   blockdata100.blocks[id-1].email=getEmail

  //   handleClose()
  // }

  

  return (
    <div className="Blockpool">
    
    <Grid container spacing={3} columns={10}>
        
        {blockPoolData.blocks.map((block) => (
            <Grid item xs={1}>
                <Blockcard id={block.blocknumber} status={block.status} firstName={block.firstName} lastName={block.lastName} email={block.email}/>
            </Grid>
            ))}

    </Grid>
    
    </div>
  )
}

export default Blockpool