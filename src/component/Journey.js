import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import image2021 from "../assets/2021.png";
// import image2021h from "../assets/2021.png";

// import image2022q1 from "../assets/2021.png";
// import image2022q1h from "../assets/2021.png";

// import image2022q2 from "../assets/2021.png";
// import image2022q2h from "../assets/2021.png";

// import image2022q3 from "../assets/2021.png";
// import image2022q3h from "../assets/2021.png";

// import image2022q4 from "../assets/2021.png";
// import image2022q4h from "../assets/2021.png";

// import image2023 from "../assets/2021.png";
// import image2023h from "../assets/2021.png";

// import image2024 from "../assets/2021.png";
// import image2024h from "../assets/2021.png";

// original image Url

import image2021h from "../assets/2021h.png";

import image2022q1 from "../assets/2022Q1.png";
import image2022q1h from "../assets/2022Q1h.png";

import image2022q2 from "../assets/2022q222 - Copy.png";
import image2022q2h from "../assets/2022q222.png";

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
      " Journey 1 option 1uisat iusto fuga praesentium optio, eaque rerum! Provident similique accu quam eius sed odit fugisantium nemo autem. Veritatis obcaecati",
    ],
  },
  {
    title: "Journey 2022 Q1",
    options: [
      " Journey erum! Provident similique accusantium nemo autem. Veritatis obcaecati 2 option 1 uisquam eius sed odit fugiat iusto fuga praesentium optio, eaque r",
    ],
  },
  {
    title: "Journey 2022 Q2",
    options: [
      "Jourus sed odit fugiat iusto fuga praesentium opt ney q2 option 1 uisquam ei io, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati",
    ],
  },
  {
    title: "Journey 2022 Q3",
    options: [
      " Journey  praesentium optio, eaque rerum! Provident 1s option 1 uisquam eius sed odit fugiat iusto fuga similique accusantium nemo autem. Veritatis obcaecati",
    ],
  },
  {
    title: "Journey 2022 Q4",
    options: [
      " Journey 2 option 1 uism optio, eaque rerum! Provident similique accusantium quam eius sed odit fugiat iusto fuga praesentiu nemo autem. Veritatis obcaecati",
    ],
  },
  {
    title: "Journey 2023",
    options: [
      "Journey 3 om optio, eaque rerum! Provident similique accusantium nemo au ption 1 uisquam eius sed odit fugiat iusto fuga praesentiu tem. Veritatis obcaecati",
    ],
  },
  {
    title: "Journey 2024",
    options: [
      "Journey 3 option 15uimilique accusantium nemo autem. Veritatis obcaecati 2 squam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati",
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
      <h1 className="sectionTitle">Our Journey</h1>
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
                {/* <img
                  
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  src={imageS === image2021 ? image2021h : image2021}
                  // src={image2021}
                /> */}
                <div
                  style={{
                    background: imageS === image2021 ? "#0048ba" : "#fff",
                    color: imageS === image2021 ? "#fff" : "#0048ba",
                  }}
                  onClick={() => {
                    setDetails(0);
                    setImageS(image2021);
                  }}
                  className="shape1 b1"
                >
                  <div className="shape">
                    <p>2021</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ display: "flex", marginTop: "20%" }}>
              <Grid container>
                <Grid item xs={6}>
                  <div
                    style={{ display: "inline", marginLeft: "0%" }}
                    className="shape-main"
                  >
                    <div className="shape-left InnovationRight InnovationRight1 InnovationRight1">
                      {/* <img
                       
                        style={{ width: "50%", height: "50%" }}
                        src={image2022q2}
                        src={
                          imageS === image2022q2 ? image2022q2h : image2022q2
                        }
                      /> */}
                      <div
                        style={{
                          background:
                            imageS === image2022q2 ? "#0048ba" : "#fff",
                          color: imageS === image2022q2 ? "#fff" : "#0048ba",
                        }}
                        onClick={() => {
                          setDetails(2);
                          setImageS(image2022q2);
                        }}
                        className="shape1 b2 b2Top"
                      >
                        <div className="shape">
                          <p>2022q2</p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="Innovationleft Innovationleft1 shape-left">
                      {/* <img
                        
                        style={{ width: "50%", height: "50%" }}
                        src={
                          imageS === image2022q1 ? image2022q1h : image2022q1
                        }
                      /> */}
                      <div
                        style={{
                          background:
                            imageS === image2022q1 ? "#0048ba" : "#fff",
                          color: imageS === image2022q1 ? "#fff" : "#0048ba",
                        }}
                        onClick={() => {
                          setDetails(1);
                          setImageS(image2022q1);
                        }}
                        className="shape1 b2 b2Bottom"
                      >
                        <div className="shape">
                          <p>2022q1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{ display: "inline", marginLeft: "0%" }}
                    className="shape-main"
                  >
                    <div className="shape-left InnovationRight InnovationRight2 InnovationRight1">
                      {/* <img
                       
                        style={{ width: "50%", height: "50%" }}
                        // src={image2022q3}

                        src={
                          imageS === image2022q4 ? image2022q4h : image2022q4
                        }
                      /> */}
                      <div
                        style={{
                          background:
                            imageS === image2022q4 ? "#0048ba" : "#fff",
                          color: imageS === image2022q4 ? "#fff" : "#0048ba",
                        }}
                        onClick={() => {
                          setDetails(4);
                          setImageS(image2022q4);
                        }}
                        className="shape1 b2 b2Top1"
                      >
                        <div className="shape">
                          <p>2022q3</p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="Innovationleft Innovationleft2 shape-left">
                      {/* <img
                       
                        style={{ width: "50%", height: "50%" }}
                        // src={image2022q4}
                        src={
                          imageS === image2022q3 ? image2022q3h : image2022q3
                        }
                      /> */}
                      <div
                        style={{
                          background:
                            imageS === image2022q3 ? "#0048ba" : "#fff",
                          color: imageS === image2022q3 ? "#fff" : "#0048ba",
                        }}
                        onClick={() => {
                          setDetails(3);
                          setImageS(image2022q3);
                        }}
                        className="shape1 b2 b2Bottom1"
                      >
                        <div className="shape">
                          <p>2022q4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: "inline" }} className="shape-main">
              <div className="Innovationleft shape-left">
                {/* <img
                  style={{ width: "50%", height: "50%" }}
                  
                  // src={image2023}

                  src={imageS === image2023 ? image2023h : image2023}
                /> */}
                <div
                  style={{
                    background: imageS === image2023 ? "#0048ba" : "#fff",
                    color: imageS === image2023 ? "#fff" : "#0048ba",
                  }}
                  onClick={() => {
                    setDetails(5);
                    setImageS(image2023);
                  }}
                  className="shape1 b3"
                >
                  <div className="shape">
                    <p>2023</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="shape-left InnovationRight">
                {/* <img
                  onClick={() => {
                    setDetails(6);
                    setImageS(image2024);
                  }}
                  style={{ width: "50%", height: "50%" }}
                  // src={image2024}

                  src={imageS === image2024 ? image2024h : image2024}
                /> */}{" "}
                <div
                  style={{
                    background: imageS === image2024 ? "#0048ba" : "#fff",
                    color: imageS === image2024 ? "#fff" : "#0048ba",
                  }}
                  onClick={() => {
                    setDetails(6);
                    setImageS(image2024);
                  }}
                  className="shape1 b3"
                >
                  <div className="shape">
                    <p>2024</p>
                  </div>
                </div>
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
    <div style={{ marginTop: "5%" }} className="option details">
      <h2>{title}</h2>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <br />
    </div>
  );
}

export default Journey;
