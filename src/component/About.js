import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

const image1 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

let image2 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

let image3 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

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

function About() {
  const [details, setDetails] = React.useState(0);

  console.log("details", details);

  return (
    <div className="common-mt">
      <Grid container spacing={2}>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <h1>About</h1>
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
            /* height: 100%; */
            /* background: red; */
            alignItems: "center",
          }}
        >
          <InspirationDetails details={details} />
        </Grid>
      </Grid>
    </div>
  );
}

function InspirationDetails({ details }) {
  const { title, options } = inspirationData[details];
  return (
    <div className="option">
      <p>Create section for text to be put in here.</p>
      <p>Text about Forevernow</p>
      <p>Select image text changes to TEAM</p>
    </div>
  );
}

export default About;
