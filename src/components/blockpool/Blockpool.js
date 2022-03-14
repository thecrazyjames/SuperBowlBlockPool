import React from 'react'
import Grid from '@mui/material/Grid';
// import { Paper } from '@mui/material';
import Blockcard from '../blockcard/Blockcard';

import blockdata100 from "../../utils/blockdata100.js"

const Blockpool = () => {

  return (
    <div className="Blockpool">
    
    <Grid container spacing={3} columns={10}>
        
        {blockdata100.blocks.map((block) => (
            <Grid item xs={1}>
                <Blockcard id={block.blocknumber} status={block.status} firstName={block.firstName} lastName={block.lastName}/>
            </Grid>
            ))}

    </Grid>
    
    </div>
  )
}

export default Blockpool