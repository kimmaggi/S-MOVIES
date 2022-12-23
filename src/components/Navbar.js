import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef()
  const navToggle = () => { 
    navRef.current.classList.toggle('show')
  }

  return (
    <div className="navbar">
      <div className="logo">
        <h1>S-movies</h1>
      </div>
      <div className="bar"  onClick={navToggle}>
        <ReorderIcon />
      </div>
      <div className="nav" ref={navRef} onClick={navToggle}>
        <Link to="/"> Homepage </Link>
        <Link to="/movies"> Movies </Link>
        <Link to="/series"> Series </Link>
        <Link to="/signin"> Sign in </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
