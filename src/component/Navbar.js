import { Link } from "@mui/material";
import React from "react";
import logo from "../assets/logo.jpg";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img style={{ height: "95px", width: "70%" }} src={logo} />
        </div>
        {/* <div className="menu menu-lg">
        <ul>
          <li>Home</li>
          <li>Concept</li>
          <li>Services</li>
          <li>Innovation</li>
          <li>Journey</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div> */}
        <div className="lg-menu menu menu-lg">
          <ul>
            <li>
              <Link className="link" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="#concept">
                Concept
              </Link>
            </li>
            <li>
              <Link className="link" href="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="link" href="#innovation">
                Innovation
              </Link>
            </li>
            <li>
              <Link className="link" href="#journey">
                Journey
              </Link>
            </li>
            <li>
              <Link className="link" href="#about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm-menu menu menu-lg">
          <p onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <MenuOpenIcon style={{ fontSize: "3rem", marginLeft: "-60%" }} />
            ) : (
              <MenuIcon style={{ fontSize: "3rem", marginLeft: "-60%" }} />
            )}
          </p>
        </div>
      </div>
      {toggle && (
        <div
          className="mid-nav"
          style={{ top: toggle && "10%", transition: "0.4s ease-in-out" }}
        >
          <Link className="link" href="#">
            <p>Home</p>
          </Link>
          <Link className="link" href="#concept">
            <p>Concept</p>
          </Link>
          <Link className="link" href="#services">
            <p>Services</p>
          </Link>
          <Link className="link" href="#innovation">
            <p>Innovation</p>
          </Link>
          <Link className="link" href="#journey">
            <p>Journey</p>
          </Link>
          <Link className="link" href="#about">
            <p>About</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
