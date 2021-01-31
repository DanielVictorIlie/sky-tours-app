import React from "react";
import { Link } from "react-router-dom";
import darkside from "./darkside.jpg";
import goodside from "./goodside.jpg";
import "./App.css";

function Homepage() {
  return (
    <div className="d-flex justify-content-center">
      <h1 className="title">CHOOSE YOUR SIDE!</h1>
      <Link to="/components/getpeoplenames">
        <img src={goodside} alt="goodside" className="img-responsive" />
      </Link>

      <Link to="/components/darksidepage">
        <img src={darkside} alt="darkside" className="img-responsive" />
      </Link>
    </div>
  );
}

export default Homepage;
