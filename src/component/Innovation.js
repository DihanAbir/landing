import React from "react";
import Grid from "@mui/material/Grid";

import image1 from "../assets/VintagePhotos.jpg";
import image2 from "../assets/Polaroids.jpg";

const details = {
  title: "Innovation 1",
  options: [
    " Innovation 1 option 1",
    " Innovation 1 option 2",
    " Innovation 1 option 3",
    " Innovation 1 option 4",
    "option 5",
  ],
};
function Innovation() {
  return (
    <div className="common-mt">
      <Grid container spacing={2}>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <InnovationDetails details={details} />
        </Grid>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <div style={{ display: "inline" }} className="shape-main">
            <div className="Innovationleft shape-left">
              <img style={{ width: "50%", height: "50%" }} src={image1} />
              <h1 style={{ margin: "20px" }}>Innovation</h1>
            </div>
            <br />
            <div className="shape-left InnovationRight">
              <img style={{ width: "50%", height: "50%" }} src={image2} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function InnovationDetails({ details }) {
  const { title, options } = details;
  return (
    <div className=" option service-main">
      <h3>{title}</h3>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <br />
    </div>
  );
}

export default Innovation;
