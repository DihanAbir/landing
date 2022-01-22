import { Link } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import NavigationIcon from "@mui/icons-material/Navigation";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Link href="#">
        <p className="Top">
          <NavigationIcon style={{ fontSize: "50px" }} />
        </p>
      </Link>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
