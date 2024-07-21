import React from 'react';
import Img2 from '../myComponents/Myimge2.jpg';
import './about.css';

export default function About() {
  const handleMouseOverabout = (e) => {
    e.target.style.letterSpacing = '4px';
    e.target.style.color = 'red';
  };

  const handleMouseLeaveabout = (e) => {
    e.target.style.letterSpacing = '0px';
    e.target.style.color = 'black';
  };

  const mouseoverexp = (e) => {
    e.target.style.borderWidth = '5px';
  };

  const mouseleaveexp = (e) => {
    e.target.style.borderWidth = '3px';
  };

  return (
    <div className='about-container'>
      <h1
        onMouseOver={handleMouseOverabout}
        onMouseLeave={handleMouseLeaveabout}
        className='about-title'
      >
        <b>
          <u>About Me</u>
        </b>
        <br/>
        <br/>
      </h1>
      <div className="card mb-3 about-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Img2}
              className="img-fluid rounded-start about-img"
              alt="About me"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div
                    className="card exp-card"
                    onMouseOver={mouseoverexp}
                    onMouseLeave={mouseleaveexp}
                  >
                    <div className="card-body">
                      <h5 className="card-title exp-title" onMouseOver={handleMouseOverabout} onMouseLeave={handleMouseLeaveabout}>
                        <b>
                          <u>Experience</u>
                        </b>
                      </h5>
                      <p className="card-text">
                        1 Year of experience in Frontend development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="card exp-card"
                    onMouseOver={mouseoverexp}
                    onMouseLeave={mouseleaveexp}
                  >
                    <div className="card-body">
                      <h5 className="card-title exp-title" onMouseOver={handleMouseOverabout} onMouseLeave={handleMouseLeaveabout}>
                        <b>
                          <u>Education</u>
                        </b>
                      </h5>
                      <p className="card-text">
                        Bachelor of Computer Applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="card-text about-description">
                Hi there, I am Mradul Natani. I was born in Ujjain. I completed
                my higher schooling from Carmel Convent Sr.Sec. School in Ujjain.
                I am also a national-level Taekwondo athlete. Currently, I am 
                pursuing a Masters of Computer Applications integrated program at
                International Institute of Professional Studies, DAVV, with a keen
                interest in expanding my knowledge in the field of Full-stack web 
                development using JavaScript, its frameworks, and libraries. 
                Additionally, I create decentralized applications on the Ethereum
                blockchain using the Solidity programming language. In my spare time, 
                I focus on Taekwondo training, playing sports, and listening to music. 
                I am passionate about combining my problem-solving abilities,
                creativity, and technical skills to build my career in the field
                of development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
