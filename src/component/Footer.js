import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

function Footer() {
  const [details, setDetails] = React.useState(0);

  console.log("details", details);

  return (
    <div id="about" style={{ padding: "3% 0px" }}>
      <Grid container spacing={2}>
        <Grid
          className="inspirationMain"
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
        >
          <h4 style={{ margin: "0 auto" }} className="FooterTitle">
            Copyright 2022 Forevernow Pty Ltd
          </h4>
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
          className="grid footer "
        >
          <Link></Link>
          <span>
            <FacebookIcon />
          </span>
          <Link></Link>
          <span>
            <InstagramIcon />
          </span>
          <Link></Link>
          <span>
            <TwitterIcon />
          </span>
          <Link></Link>
          <span>
            <LinkedInIcon />
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
