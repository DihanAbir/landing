import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

const image1 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

let image2 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

let image3 = `https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`;

const aboutData = [
  {
    title: "About 1",
    options: ["The Company’ and change text header to read About Forevernow"],
  },
  {
    title: "About 2",
    options: ["The Team’ and change text header to read Forevernow Team"],
  },
  {
    title: "About 3",
    options: ["Contact Us’ and change text header to read Contact Us"],
  },
];

function About() {
  const [details, setDetails] = React.useState(0);

  console.log("details", details);

  return (
    <div id="about" className="common-mt">
      <Grid container spacing={2}>
        <Grid
          className="inspirationMain"
          item
          xl={6}
          ls={6}
          md={6}
          sm={12}
          xs={12}
        >
          <h1 className="sectionTitle">About</h1>
          <div className="shape-main">
            <div className="inspirationShape bg-shape shape-left">
              <img onMouseEnter={() => setDetails(0)} src={image1} />
            </div>
            <div className="inspirationShape shape-right">
              <img
                onMouseEnter={() => setDetails(1)}
                // style={{ width: "300px", height: "300px" }}
                src={image2}
              />
              <br />
              <br />
              <br />
              <img
                onMouseEnter={() => setDetails(2)}
                // style={{ width: "300px", height: "300px" }}
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
      {" "}
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <br />
    </div>
  );
}

export default About;
