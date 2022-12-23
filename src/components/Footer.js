import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        < YouTubeIcon />  <InstagramIcon />  <FacebookIcon /> 
      </div>
    </div>
  );
}

export default Footer;
