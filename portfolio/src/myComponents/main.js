import React from 'react';
import Image from '../myComponents/myimage.jpg';
import Limg from '../myComponents/linkedinlogo.png';
import Gimg from '../myComponents/githublogo.png';
import './main.css';

export default function Main() {
  const handleMouseOver = (event) => {
    event.target.style.color = 'black';
    event.target.style.backgroundColor = 'white' 
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'black'
  };
  const handleMouseOverLi = (e)=>{
    e.target.style.border = '2px solid black'
  };
  const handleMouseLeaveLi = (e)=>{
    e.target.style.border = '0px'
  }
  const handleMouseOverGh = (e)=>{
    e.target.style.border = '2px solid black'
  };
  const handleMouseLeaveGh = (e)=>{
    e.target.style.border = '0px'
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} className='mainclass'>
      <img src={Image} alt='myimage' style={{ height: '250px', margin: 0, borderRadius: '990px', border: '2px solid black' }} className='image-container' />
      <div className='intro' style={{ float: 'left', margin: 0 }}>
        <br />
        <h4 style={{ marginBottom: '1px', fontSize: '20px' }}>Hello, I am</h4>
        <h2 style={{ fontStyle: 'oblique', color: 'red', fontSize: '40px', margin: 0 }}>Mradul Natani</h2>
        <h4 style={{ margin: 0, wordSpacing: '2px' }}>I am a full stack web developer</h4>
        <br />
        <ul style={{ listStyle: 'none', marginLeft: '40px',marginRight:'100px'}}>
          <li onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <a href='https://www.dropbox.com/scl/fi/53trazfdjiezxcjomc0fx/Mraadul-Natani-Resume.docx?rlkey=vc7hprtxk14dc2p293c2u6z9x&st=6bfdxp7m&dl=0'>
              <button style={{ backgroundColor: 'black', color: 'white', height: '30px', borderRadius: '30px' }}>Download CV</button>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/mradul-natani-882194248/'>
              <img src={Limg} alt='linkedin' style={{ height: '30px', borderRadius: '900px', marginLeft:'5px',marginRight:'5px' }} onMouseOver={handleMouseOverLi} onMouseLeave={handleMouseLeaveLi} />
            </a>
          </li>
          <li>
            <a href='https://github.com/mradulnatani'>
              <img src={Gimg} alt='github' style={{ borderRadius: '900px', height: '30px' }} onMouseOver={handleMouseOverGh} onMouseLeave={handleMouseLeaveGh}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
