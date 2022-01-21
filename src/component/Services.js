import React from "react";
import Grid from "@mui/material/Grid";

import image1 from "../assets/Scrollimage1.jpg";

const details = {
  title: "Inspiration 1",
  options: [
    "It to make a type specimen book",
    "There are many variations of passages of Lorem Ipsum available,",
    "Contrary to popular belief",
    "Below for those interested. Sections 1.10.32",
    "Where can I get some?",
  ],
};
function Services() {
  return (
    <div className="common-mt">
      <Grid container spacing={2}>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <ServicesDetails details={details} />
        </Grid>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <div className="shape-main">
            <div className="shape-left">
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
    <div className=" option service-main">
      <h1>Services</h1>
      <h3>{title}</h3>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </div>
  );
}

export default Services;