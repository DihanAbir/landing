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
      <h1 className="sectionTitle">About</h1>
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
          <div className="shape-main about-shape-main">
            <div className="inspiration-padding Inspiration-main shape-main">
              <div
                className="insr-main big-about"
                // onClick={() => setDetails(0)}
                onMouseEnter={() => setDetails(0)}
                style={{
                  background: details === 0 && "#02b382",
                  display: "flex",
                }}
              >
                <div className="big-aboutB inspirationShape1 about-img-one shape-left">
                  {/* <img
                onClick={() => setDetails(0)}
                // style={{ width: "300px", height: "300px" }}
                src={image1}
              /> */}
                </div>
              </div>
              <div className="about-D-image inspirationShape shape-right">
                {/* <img
                onClick={() => setDetails(1)}
                // style={{ width: "300px", height: "300px" }}
                src={image2}
              /> */}
                <div
                  className="insr-main insr-mainleft"
                  // onClick={() => setDetails(1)}
                  onMouseEnter={() => setDetails(1)}
                  style={{ background: details === 1 && "#02b382" }}
                >
                  <div className="inspirationShape1 about-img-two"></div>
                </div>
                <div
                  className="insr-main insr-mainleft"
                  // onClick={() => setDetails(2)}
                  onMouseEnter={() => setDetails(2)}
                  style={{ background: details === 2 && "#02b382" }}
                >
                  <div className="inspirationShape1 about-img-three"></div>
                </div>
                {/* <img
                onClick={() => setDetails(2)}
                // style={{ width: "300px", height: "300px" }}
                src={image3}
              /> */}
              </div>
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
