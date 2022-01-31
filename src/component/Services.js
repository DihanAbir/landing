import React from "react";
import Grid from "@mui/material/Grid";

import image1 from "../assets/Scrollimage1.jpg";

const details = {
  title: "Inspiration 1",
  options: [
    "It to make a type specimen book uisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati",
  ],
};
function Services() {
  return (
    <div id="services" className="common-mt">
      <Grid container spacing={2}>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <div className="serviceP">
            <h1 className="sectionTitle">Our Service</h1>

            <ServicesDetails details={details} />
          </div>
        </Grid>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12} className="grid">
          <div className="shape-main">
            <div className="shape-left services" style={{ padding: "10%" }}>
              <img style={{ width: "100%", height: "100%" }} src={image1} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function ServicesDetails({ details }) {
  const { title, options } = details;
  return (
    <div className=" grid option service-main">
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </div>
  );
}

export default Services;
