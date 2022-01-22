import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import image2021 from "../assets/2021.png";
import image2021h from "../assets/2021h.png";

import image2022q1 from "../assets/2022Q1.png";
import image2022q1h from "../assets/2022Q1h.png";

import image2022q2 from "../assets/2022q2.png";
import image2022q2h from "../assets/2021q2h.png";

import image2022q3 from "../assets/2022q3.png";
import image2022q3h from "../assets/2021q3h.png";

import image2022q4 from "../assets/2022q4.png";
import image2022q4h from "../assets/2022Q4h.png";

import image2023 from "../assets/2023.png";
import image2023h from "../assets/2023h.png";

import image2024 from "../assets/2024.png";
import image2024h from "../assets/2024h.png";

const journeyData = [
  {
    title: "Journey 2021",
    options: [
      " Journey 1 option 1",
      " Journey 1 option 2",
      " Journey 1 option 3",
      " Journey 1 option 4",
      "option 5",
    ],
  },
  {
    title: "Journey 2022 Q1",
    options: [
      " Journey 2 option 1",
      " Journey 2 option 2",
      " Journey 2 option 3",
      " Journey 2 option 4",
      " Journey 2 option 5",
    ],
  },
  {
    title: "Journey 2022 Q2",
    options: [
      "Journey q2 option 1",
      "Journey 3 option 2",
      "Journey 3 option 3",
      "Journey 3 option 4",
      "Journey 3 option 5",
    ],
  },
  {
    title: "Journey 2022 Q3",
    options: [
      " Journey 1s option 1",
      " Journey 1 option 2",
      " Journey 1 option 3",
      " Journey 1 option 4",
      "option 5",
    ],
  },
  {
    title: "Journey 2022 Q4",
    options: [
      " Journey 2 option 1",
      " Journey 2 option 2",
      " Journey 2 option 3",
      " Journey 2 option 4",
      " Journey 2 option 5",
    ],
  },
  {
    title: "Journey 2023",
    options: [
      "Journey 3 option 1",
      "Journey 3 option 2",
      "Journey 3 option 3",
      "Journey 3 option 4",
      "Journey 3 option 5",
    ],
  },
  {
    title: "Journey 2024",
    options: [
      "Journey 3 option 152",
      "Journey 3 option werw",
      "Journey 3234 option 3",
      "Journey 323 option 4",
      "Journey 3 option 5",
    ],
  },
];

function Journey() {
  const [imageS, setImageS] = React.useState(image2021);
  const [details, setDetails] = React.useState(0);
  React.useEffect(() => {}, [imageS]);
  return (
    <div
      id="journey"
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
                  onClick={() => {
                    setDetails(0);
                    setImageS(image2021);
                  }}
                  style={{ width: "100%", height: "100%" }}
                  src={imageS === image2021 ? image2021h : image2021}
                  // src={image2021}
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
                    onClick={() => {
                      setDetails(2);
                      setImageS(image2022q2);
                    }}
                    style={{ width: "50%", height: "50%" }}
                    src={image2022q2}
                    src={imageS === image2022q2 ? image2022q2h : image2022q2}
                  />
                </div>
                <br />
                <div className="Innovationleft Innovationleft1 shape-left">
                  <img
                    onClick={() => {
                      setDetails(1);
                      setImageS(image2022q1);
                    }}
                    style={{ width: "50%", height: "50%" }}
                    src={imageS === image2022q1 ? image2022q1h : image2022q1}
                  />
                </div>
              </div>
              <div
                style={{ display: "inline", marginLeft: "0%" }}
                className="shape-main"
              >
                <div className="shape-left InnovationRight InnovationRight2 InnovationRight1">
                  <img
                    onClick={() => {
                      setDetails(4);
                      setImageS(image2022q4);
                    }}
                    style={{ width: "50%", height: "50%" }}
                    // src={image2022q3}

                    src={imageS === image2022q4 ? image2022q4h : image2022q4}
                  />
                </div>
                <br />
                <div className="Innovationleft Innovationleft2 shape-left">
                  <img
                    onClick={() => {
                      setDetails(3);
                      setImageS(image2022q3);
                    }}
                    style={{ width: "50%", height: "50%" }}
                    // src={image2022q4}
                    src={imageS === image2022q3 ? image2022q3h : image2022q3}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: "inline" }} className="shape-main">
              <div className="Innovationleft shape-left">
                <img
                  style={{ width: "50%", height: "50%" }}
                  onClick={() => {
                    setDetails(5);
                    setImageS(image2023);
                  }}
                  // src={image2023}

                  src={imageS === image2023 ? image2023h : image2023}
                />
              </div>
              <br />
              <div className="shape-left InnovationRight">
                <img
                  onClick={() => {
                    setDetails(6);
                    setImageS(image2024);
                  }}
                  style={{ width: "50%", height: "50%" }}
                  // src={image2024}

                  src={imageS === image2024 ? image2024h : image2024}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <AddressDetails details={details} />
    </div>
  );
}

function AddressDetails({ details }) {
  const { title, options } = journeyData[details];
  return (
    <div className="option details">
      <h2>{title}</h2>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <br />
    </div>
  );
}

export default Journey;
