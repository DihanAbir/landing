import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

const image1 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

let image2 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

let image3 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

const aboutData = [
  {
    title: "About 1",
    options: [
      " About 1 option 1",
      " About 1 option 2",
      " About 1 option 3",
      " About 1 option 4",
      "option 5",
    ],
  },
  {
    title: "About 2",
    options: [
      " About 2 option 1",
      " About 2 option 2",
      " About 2 option 3",
      " About 2 option 4",
      " About 2 option 5",
    ],
  },
  {
    title: "About 3",
    options: [
      "About 3 option 1",
      "About 3 option 2",
      "About 3 option 3",
      "About 3 option 4",
      "About 3 option 5",
    ],
  },
];

function About() {
  const [details, setDetails] = React.useState(0);

  console.log("details", details);

  return (
    <div id="about" className="common-mt">
      <h1>About</h1>
      <Grid container spacing={2}>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <div className="shape-main">
            <div className="shape-left">
              <img
                onClick={() => setDetails(0)}
                style={{ width: "100%", height: "200px" }}
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
        <Grid
          item
          xl={6}
          ls={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          className="grid"
        >
          <InspirationDetails details={details} />
        </Grid>
      </Grid>
    </div>
  );
}

function InspirationDetails({ details }) {
  const { title, options } = aboutData[details];
  return (
    <div className="option">
      <h2>{title}</h2>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <br />
    </div>
  );
}

export default About;
