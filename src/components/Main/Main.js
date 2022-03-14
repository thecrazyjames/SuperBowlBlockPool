
import { Grid } from "@mui/material";
import Blockpool from "../blockpool/Blockpool.js"



function Main() {
    return (
      <div className="Main">
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Blockpool />
          </Grid>
        </Grid>
        
        
      </div>
    );
  }
  
  export default Main;