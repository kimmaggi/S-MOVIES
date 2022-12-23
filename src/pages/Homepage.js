import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.png";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <Link to="/signin">
          <button>Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
