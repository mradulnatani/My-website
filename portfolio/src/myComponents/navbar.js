import React from 'react'
import './navbar.css'
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div class="topnav" id="myTopnav" style={{color:'black',borderRadius:'0px 10px 10px 10px'}}>
    <a href="#" class="active" style={{letterSpacing:'3px'}}>Home</a>
    <a href="./about.js" style={{letterSpacing:'3px'}}>About</a>
    <a href="./projects.js" style={{letterSpacing:'3px'}}>Projects</a>
    <a href='#' style={{marginLeft:'600px',fontSize:'20px',letterSpacing:'2px',color:'black',letterSpacing:'1px'}}><i><b>9302956451 | mradulnatani0@gmail.com</b></i></a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>

    </div>
  )
}
