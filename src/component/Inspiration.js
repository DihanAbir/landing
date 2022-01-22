import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

import image1 from "../assets/VintagePhotos.jpg";
import image2 from "../assets/Scrollimage3.jpg";
import image3 from "../assets/GreetCard1.jpg";

const inspirationData = [
  {
    title: "Inspiration 1",
    options: [
      " Inspiration 1 option 1",
      " Inspiration 1 option 2",
      " Inspiration 1 option 3",
      " Inspiration 1 option 4",
      "option 5",
    ],
  },
  {
    title: "Inspiration 2",
    options: [
      " Inspiration 2 option 1",
      " Inspiration 2 option 2",
      " Inspiration 2 option 3",
      " Inspiration 2 option 4",
      " Inspiration 2 option 5",
    ],
  },
  {
    title: "Inspiration 3",
    options: [
      "Inspiration 3 option 1",
      "Inspiration 3 option 2",
      "Inspiration 3 option 3",
      "Inspiration 3 option 4",
      "Inspiration 3 option 5",
    ],
  },
];

function Inspiration() {
  const [details, setDetails] = React.useState(0);

  console.log("details", details);

  return (
    <div id="concept" className="common-mt">
      <Grid container spacing={2}>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <h1 style={{ textAlign: "left" }}>Inspiration</h1>
          <div className="inspiration-padding shape-main">
            <div className="shape-left">
              <img
                onClick={() => setDetails(0)}
                style={{ width: "200px", height: "200px" }}
                src={image1}
              />
            </div>
            <div className="shape-right">
              <img
                onClick={() => setDetails(1)}
                style={{ width: "200px", height: "200px" }}
                src={image2}
              />
              <br />
              <br />
              <img
                onClick={() => setDetails(2)}
                style={{ width: "200px", height: "200px" }}
                src={image3}
              />
            </div>
          </div>
        </Grid>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12} className="grid">
          <InspirationDetails details={details} />
        </Grid>
      </Grid>
    </div>
  );
}

function InspirationDetails({ details }) {
  const { title, options } = inspirationData[details];
  return (
    <div className="option" style={{ textAlignLast: "center" }}>
      <h2>{title}</h2>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <br />
    </div>
  );
}

export default Inspiration;
