
import { Grid } from "@mui/material";
import Blockpool from "../blockpool/Blockpool.js"

import "./main.css"

function Main() {
    return (
      <div className="Main">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <Blockpool />
          </Grid>
        </Grid>
        
        
      </div>
    );
  }
  
  export default Main;