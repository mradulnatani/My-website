import React from 'react'
import './navbar.css'
export default function navbar() {
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
    <a href="#" class="active">Home</a>
    <a href="#">About</a>
    <a href="#">Projects</a>
    <a href="#">Contact</a>
    <a href='#' style={{marginLeft:'800px',fontSize:'20px',letterSpacing:'2px'}}><i><b>Mradul Natani</b></i></a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>

    </div>
  )
}
