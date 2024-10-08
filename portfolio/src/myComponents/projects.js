import React from 'react';
import Nftlogo from '../myComponents/nftlogo.avif';
import Blockchainlogo from '../myComponents/blockchainlogo.jpg';
import Portfoliologo from '../myComponents/portfolio.jpg';
import AssetManagerLogo from '../myComponents/Asset Manager logo.png'
import './projcts.css'; 

export default function Projects() {
  const handleButtonOver = (e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'blue';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = 'white';
  };

  const handleProjectOver = (e) => {
    e.target.style.borderWidth = '5px';
  };

  const handleProjectLeave = (e) => {
    e.target.style.borderWidth = '1px';
  };

  return (
    <div className="projects-container" id="Projects">
      <h1 className="projects-title">Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 projects-grid">
        <div className="col">
          <div className="card" onMouseOver={handleProjectOver} onMouseLeave={handleProjectLeave}>
            <img src={Blockchainlogo} className="card-img-top" alt="Blockchain Project" />
            <div className="card-body">
              <h5 className="card-title">Lottery-Dapp</h5>
              <p className="card-text">The Lottery-Dapp is a decentralized web application that can be used to perform a lottery game. The app works on the instructions of the code written in the lottery.sol file.</p>
              <a href="https://github.com/mradulnatani/lottery-Dapp">
                <button className="project-button" onMouseOver={handleButtonOver} onMouseLeave={handleButtonLeave}>Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" onMouseOver={handleProjectOver} onMouseLeave={handleProjectLeave}>
            <img src={Nftlogo} className="card-img-top" alt="NFT Project" />
            <div className="card-body">
              <h5 className="card-title">MYnft</h5>
              <p className="card-text">This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.</p>
              <a href="https://github.com/mradulnatani/MYnft">
                <button className="project-button" onMouseOver={handleButtonOver} onMouseLeave={handleButtonLeave}>Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" onMouseOver={handleProjectOver} onMouseLeave={handleProjectLeave}>
            <img src={Portfoliologo} className="card-img-top" alt="Portfolio Project" />
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">Portfolio website using Node.js and React.js</p>
              <a href="https://github.com/mradulnatani/My-website">
                <button className="project-button" onMouseOver={handleButtonOver} onMouseLeave={handleButtonLeave}>Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" onMouseOver={handleProjectOver} onMouseLeave={handleProjectLeave}>
            <img src={AssetManagerLogo} className="card-img-top" alt="Blockchain Project" />
            <div className="card-body">
              <h5 className="card-title">Asset Manager Pro</h5>
              <p className="card-text">A comprehensive asset management solution for real-time resource analysis, allocation, and maintenance.</p>
              <a href="https://github.com/mradulnatani/Pro-Asset-Manager">
                <button className="project-button" onMouseOver={handleButtonOver} onMouseLeave={handleButtonLeave}>Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
