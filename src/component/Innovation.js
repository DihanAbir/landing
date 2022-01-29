import React from "react";
import Grid from "@mui/material/Grid";

import image1 from "../assets/VintagePhotos.jpg";
import image2 from "../assets/Polaroids.jpg";

// const details = {
//   title: "Innovation 1",
//   options: [
//     " Innovation 1 option 1",
//     " Innovation 1 option 2",
//     " Innovation 1 option 3",
//     " Innovation 1 option 4",
//     "option 5",
//   ],
// };

const inspirationData = [
  {
    title: "Innovation 1",
    options: [
      " anditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum u",
    ],
  },
  {
    title: "Innovation 2",
    options: [
      " Innovation 2 option 1 uisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati ",
    ],
  },
];
function Innovation() {
  const [details, setDetails] = React.useState(0);

  console.log("details", details);
  return (
    <div id="innovation" className="common-mt">
      <Grid container spacing={2}>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12} className="">
          <InnovationDetails details={details} />
        </Grid>
        <Grid item xl={6} ls={6} md={6} sm={12} xs={12}>
          <div style={{ display: "inline" }} className="shape-main">
            <div className="ImageTop Innovationleft shape-left">
              <img
                onClick={() => setDetails(0)}
                style={{ width: "50%", height: "51%", zIndex: "-100" }}
                src={image1}
              />
            </div>

            <div className="ImageBottom shape-left InnovationRight">
              <img
                onClick={() => setDetails(1)}
                style={{ width: "50%", height: "50%" }}
                src={image2}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function InnovationDetails({ details }) {
  const { title, options } = inspirationData[details];
  return (
    <div className=" option service-main grid">
      {options.map((option, index) => (
        <div>
          <h1 className="sectionTitle">Innovation</h1>
          <p key={index}>{option}</p>
        </div>
      ))}
      <br />
    </div>
  );
}

export default Innovation;
