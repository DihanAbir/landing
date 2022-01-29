import { Grid } from "@mui/material";
import React from "react";

function JourneySection() {
  return (
    <div style={{ height: "40vh", width: "90%", margin: "0 auto " }}>
      <Grid container>
        <Grid item xs={2}>
          <div className="shapeDiv">
            <small className="text">2021 Q2</small>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="journeyQ">
            <div>
              <small>2021 Q2</small>
            </div>
            <div>
              <small>2021 Q2</small>
            </div>
            <div>
              <small>2021 Q2</small>
            </div>
            <div>
              <small>2021 Q2</small>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <small>2021 Q2</small>
          </div>
          <div>
            <small>2021 Q2</small>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default JourneySection;
