import { Link } from "@mui/material";
import React, { useEffect } from "react";
// import logo from "../assets/logo.jpg";
import logo from "../assets/logo1.png";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import introVideo from "../assets/Web-Intro.mp4";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img style={{ height: "95px", width: "100%" }} src={logo} />
        </div>
        <Link className="link">
          <BasicModal />
        </Link>
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
                Vision
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setInterval(() => {
      setOpen(false);
    }, 27000);
  });

  return (
    <div>
      <Button style={{ display: "none" }} onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <p onClick={handleClose} className="cross">
              X
            </p>
            <video
              width="100%"
              height="100%"
              muted
              loop={true}
              autoPlay={true}
              // controls
            >
              <source src={introVideo} type="video/mp4" />
            </video>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
