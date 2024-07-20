import React from 'react';
import Img2 from '../myComponents/Myimge2.jpg';

export default function About() {
  const handleMouseOver=(e)=>{
    e.target.style.height = '300px';
    e.target.style.maxWidth = '300px'
    e.target.style.maxWidth = 'red'
  }
  const handleMouseLeave=(e)=>{
    e.target.style.height = '290px';
    e.target.style.maxWidth = '290px'
    e.target.style.borderColor = 'black'
  }
  const handleMouseOverabout=(e)=>{
    e.target.style.letterSpacing = '4px'
    e.target.style.color = 'red'
  }
  const handleMouseLeaveabout=(e)=>{
    e.target.style.letterSpacing = '0px'
    e.target.style.color = 'black'
  }
  const mouseOverwhole=(e)=>{
    e.target.style.borderWidth = '5px'
  }
  const mouseLeavewhole=(e)=>{
    e.target.style.borderWidth = '1px'
  }
  return (
    <div>
      <h1 onMouseOver={handleMouseOverabout} onMouseLeave={handleMouseLeaveabout} style={{display:'inline'}}><b><u>About Me</u></b></h1>
      <br />
      <br/><br/>
      <div className="card mb-3" style={{ maxWidth: '800px', margin: '0 auto' ,borderRadius:'0px 60px 60px 60px',padding:'10px',display:'block'}}onMouseOver={mouseOverwhole} onMouseLeave={mouseLeavewhole}>
        <div className="row g-0" >
          <div className="col-md-4">
            <img src={Img2} className="img-fluid rounded-start" alt="..."  style={{borderRadius:'350px '}} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text" style={{paddingLeft:'20px'}}>Hi there, I am Mradul Natani. I was born in Ujjain. I completed my higher schooling from Carmel Convent Sr.Sec. School in Ujjain where I developed a strong foundation in academics and extracurricular activities also I am a national level Taekwondo athelete. Currently I am persuing Masters of Computer Applications integrated program at International Institute of Professional Studies, DAVV ,with a keen interst and expanding my knowledge in the field of Full stack web development using JavaScript using its frameworks and libraries also I make decentralized applications on Ethereum blockchain using Solidity programming language. In my spare time mostly I do my Taekwondo training, playing sports also I love listening to music. I am passionate about combining my problem solving abilities, creativity and my technical skills to build my career in the field of development.
              </p>
            </div>
            <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0" style={{maxWidth:'600px',maxHeight:'600px',borderRadius:'40px'}}onMouseOver={mouseOverwhole} onMouseLeave={mouseLeavewhole}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><b>Experience</b></h5>
              <p className="card-text">1+ Year of experience in Frontend development</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{borderRadius:'0px 0px 60px 0px'}}onMouseOver={mouseOverwhole} onMouseLeave={mouseLeavewhole}>
            <div className="card-body">
              <h5 className="card-title"><b>Education</b></h5>
              <p className="card-text">Bachelor of Computer Applications</p>
            </div>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>
      <div class="card border-success mb-3" style={{maxWidth: '50rem',margin:'auto',borderRadius:'50px'}}onMouseOver={mouseOverwhole} onMouseLeave={mouseLeavewhole}>
  <div class="card-header bg-transparent border-success"><b>Top Skills</b></div>
  <div class="card-body text-success"onMouseOver={mouseOverwhole} onMouseLeave={mouseLeavewhole}>
    <p class="card-text"onMouseOver={mouseOverwhole} onMouseLeave={mouseLeavewhole}><b>As a passionate full-stack web developer, I bring a wealth of expertise to the table. My intermediate knowledge of Solidity and DApp development allows me to create decentralized applications that interact with smart contracts. I also excel in C++ and have a strong grasp of data structures and algorithms. Bridging the gap between front-end and back-end development, I craft pixel-perfect UIs and ensure seamless user experiences. Whether it’s blockchain or traditional web development, I thrive on turning ideas into reality.</b></p>
  </div>
</div>
    </div>
  );
}
