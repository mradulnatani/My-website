import React from 'react';
import './navbar.css';

export default function Navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="topnav" id="myTopnav">
        <a href="#" className="active">Home</a>
        <a href="./about.js">About</a>
        <a href="./projects.js">Projects</a>
        <a href="#" className="contact-info"><i><b>9302956451 | mradulnatani0@gmail.com</b></i></a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}
