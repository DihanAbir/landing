import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

import image1 from "../assets/VintagePhotos.jpg";
import image2 from "../assets/Scrollimage3.jpg";
import image3 from "../assets/GreetCard1.jpg";

const inspirationData = [
  {
    title: "Inspiration 1",
    options: [
      " Inspiration 1 opti , eaque rerum! Provident similique accusantium nemo autem. Veri on 1uisquam eius sed odit fugiat iusto fuga praesentium optio tatis obcaecati",
    ],
  },
  {
    title: "Inspiration 2",
    options: [
      " Inspiration 2  rerum! Provident similique accus option 1 uisquam eius sed odit fugiat iusto fuga praesentium optio, eaque  antium nemo autem. Veritatis obcaecati",
    ],
  },
  {
    title: "Inspiration 3",
    options: [
      "Inspiration 3 e rerum! Provident similique accusantium  option 1 uisquam eius sed odit fugiat iusto fuga praesentium optio, eaqu nemo autem. Veritatis obcaecati",
    ],
  },
];

function Inspiration() {
  const [details, setDetails] = React.useState(0);
  const [Tg, setTg] = React.useState(false);

  console.log("details", details);

  return (
    <div id="concept" className="common-mt inspiratio">
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
          <div className="inspiration-padding Inspiration-main shape-main">
            <div
              className="insr-main"
              // onClick={() => setDetails(0)}
              onMouseEnter={() => {
                setDetails(0);
                setTg(true);
              }}
              onMouseLeave={() => setTg(false)}
              style={{
                background: Tg && details === 0 ? "#02b382" : "#fff0",
                display: "flex",
              }}
            >
              <div className=" inspirationShape1 insp-img-one shape-left">
                {/* <img
                onClick={() => setDetails(0)}
                // style={{ width: "300px", height: "300px" }}
                src={image1}
              /> */}
              </div>
            </div>
            <div className="inspirationShape shape-right">
              {/* <img
                onClick={() => setDetails(1)}
                // style={{ width: "300px", height: "300px" }}
                src={image2}
              /> */}
              <div
                className="insr-main insr-mainleft"
                // onClick={() => setDetails(1)}
                onMouseEnter={() => {
                  setDetails(1);
                  setTg(true);
                }}
                onMouseLeave={() => setTg(false)}
                style={{
                  background: Tg && details === 1 ? "#02b382" : "#fff0",
                  display: "flex",
                }}
              >
                <div className="inspirationShape1 insp-img-two"></div>
              </div>
              <div
                className="insr-main insr-mainleft"
                // onClick={() => setDetails(2)}
                onMouseEnter={() => {
                  setDetails(2);
                  setTg(true);
                }}
                onMouseLeave={() => setTg(false)}
                style={{
                  background: Tg && details === 2 ? "#02b382" : "#fff0",
                  display: "flex",
                }}
              >
                <div className="inspirationShape1 insp-img-three"></div>
              </div>
              {/* <img
                onClick={() => setDetails(2)}
                // style={{ width: "300px", height: "300px" }}
                src={image3}
              /> */}
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
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   alignSelf: "center",
          // }}
        >
          <h1
            className="inspirationheader sectionTitle"
            style={{ textAlign: "left" }}
          >
            Our Inspiration
          </h1>
          <InspirationDetails details={details} />
        </Grid>
      </Grid>
    </div>
  );
}

function InspirationDetails({ details }) {
  const { title, options } = inspirationData[details];
  return (
    <div className="option grid" style={{ textAlignLast: "center" }}>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <br />
    </div>
  );
}

export default Inspiration;
