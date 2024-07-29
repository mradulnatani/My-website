import React, { useState, useEffect } from 'react';
import Image from '../myComponents/myimage.jpg';
import Limg from '../myComponents/linkedin.png';
import Gimg from '../myComponents/githublogo.png';
import './main.css';

export default function Main() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    setImageVisible(true);
  }, []);

  const handleMouseOver = (event) => {
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'black';
  };

  const handleMouseOverLi = (e) => {
    e.target.style.border = '2px solid black';
  };

  const handleMouseLeaveLi = (e) => {
    e.target.style.border = '0px';
  };

  const handleMouseOverGh = (e) => {
    e.target.style.border = '2px solid black';
  };

  const handleMouseLeaveGh = (e) => {
    e.target.style.border = '0px';
  };

  const handleMouseOveri = (e) => {
    e.target.style.borderColor = 'rgb(239, 194, 194)';
  };

  const handleMouseLeavei = (e) => {
    e.target.style.borderColor = 'black';
  };

  return (
    <div className='mainclass'>
      <img
        src={Image}
        alt='myimage'
        className={`image-container ${imageVisible ? 'visible' : ''}`}
        onMouseOver={handleMouseOveri}
        onMouseLeave={handleMouseLeavei}
      />
      <div className='intro'>
        <h4 className='intro-text'>Hello, I am</h4>
        <h2 className='name-text'>Mradul Natani</h2>
        <h4 className='intro-text'>I am a full stack web developer</h4>
        <ul className='social-links'>
          <li onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <a href='https://www.dropbox.com/scl/fi/4ws1wfpldc926usfroep1/Mraadul-Natani-Resume.docx?rlkey=6da5rnpujifeis0tzbg7xdmgf&st=tjx5a5mr&dl=0'>
              <button className='download-cv-button' style={{borderRadius:'500px', display:'flex-box'}}>Download CV</button>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/mradul-natani-882194248/'>
              <img
                src={Limg}
                alt='linkedin'
                className='social-icon'
                onMouseOver={handleMouseOverLi}
                onMouseLeave={handleMouseLeaveLi}
               style={{borderRadius:'500px'}}/>
            </a>
          </li>
          <li>
            <a href='https://github.com/mradulnatani'>
              <img
                src={Gimg}
                alt='github'
                className='social-icon'
                onMouseOver={handleMouseOverGh}
                onMouseLeave={handleMouseLeaveGh}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
