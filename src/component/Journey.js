import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import image2021 from "../assets/2021.png";
import image2021h from "../assets/2021h.png";

import image2022q1 from "../assets/2022Q1.png";
import image2022q1h from "../assets/2022Q1h.png";

import image2022q2 from "../assets/2022q2.png";
import image2022q2h from "../assets/2021q2h.png";

import image2022q3 from "../assets/2022q3.png";
import image2022q4 from "../assets/2022q4.png";
import image2023 from "../assets/2023.png";
import image2024 from "../assets/2024.png";

function Journey() {
  const [imageS, setImageS] = React.useState(image2021);
  React.useEffect(() => {}, [imageS]);
  return (
    <div
      className="common-mt"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Journey</h1>
      <div className="journeyShape">
        <Grid container spacing={2}>
          {/* xl={2} ls={6} md={6} sm={12} xs={12} */}
          <Grid item xs={2}>
            <div
              style={{ display: "inline", marginTop: "10%" }}
              className="shape-main"
            >
              <div
                style={{ boxSizing: "border-box" }}
                className="shape-left InnovationRight Present"
              >
                <img
                  onClick={() => setImageS(image2022q2)}
                  style={{ width: "100%", height: "100%" }}
                  // src={imageS === image2021 ? image2021h : image2021}
                  src={image2022q2}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ display: "flex", marginTop: "20%" }}>
              <div
                style={{ display: "inline", marginLeft: "0%" }}
                className="shape-main"
              >
                <div className="shape-left InnovationRight InnovationRight1 InnovationRight1">
                  <img
                    onClick={() => setImageS(image2022q2)}
                    style={{ width: "50%", height: "50%" }}
                    src={image2022q2}
                    // src={imageS === image2022q1 ? image2022q1h : image2022q1}
                  />
                </div>
                <br />
                <div className="Innovationleft Innovationleft1 shape-left">
                  <img
                    onClick={() => setImageS(image2022q2)}
                    style={{ width: "50%", height: "50%" }}
                    src={imageS === image2022q2 ? image2022q2h : image2022q2}
                  />
                </div>
              </div>
              <div
                style={{ display: "inline", marginLeft: "0%" }}
                className="shape-main"
              >
                <div className="shape-left InnovationRight InnovationRight2 InnovationRight1">
                  <img
                    style={{ width: "50%", height: "50%" }}
                    src={image2022q3}
                  />
                </div>
                <br />
                <div className="Innovationleft Innovationleft2 shape-left">
                  <img
                    style={{ width: "50%", height: "50%" }}
                    src={image2022q4}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: "inline" }} className="shape-main">
              <div className="Innovationleft shape-left">
                <img style={{ width: "50%", height: "50%" }} src={image2023} />
              </div>
              <br />
              <div className="shape-left InnovationRight">
                <img style={{ width: "50%", height: "50%" }} src={image2024} />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="option details">
        <h1>Create section for text to be put in here.</h1>

        <p>Text</p>
        <p>Text</p>
      </div>
    </div>
  );
}

export default Journey;
