import React from 'react'
import Nftlogo from '../myComponents/nftlogo.avif'
import Blockchainlogo from '../myComponents/blockchainlogo.jpg'
import Portfoliologo from '../myComponents/portfolio.jpg'
export default function projects() {
  const handlebuttonOver=(e)=>{
    e.target.style.backgroundColor='white'
    e.target.style.color = 'blue'
  }
  const handlebuttonLeave=(e)=>{
    e.target.style.backgroundColor='blue'
    e.target.style.color='white'
  }
  const handleprojectOver=(e)=>{
    e.target.style.borderWidth = '5px'
  }
  const handleprojectLeave=(e)=>{
    e.target.style.borderWidth = '1px'
  }
  return (
    <div style={{marginBottom:'500px'}}>
        <h1 style={{color:'black'}}><b><u>Projects</u></b></h1>
      <div className="row row-cols-1 row-cols-md-2 g-4"style={{maxHeight:'600px',maxWidth:'500px',margin:'auto'}}>
  <div className="col">
    <div className="card" style={{height:'100%',width:'100%'}}>
      <img src={Blockchainlogo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">
        Lottery-Dapp</h5>
        <p className="card-text">The Lottery-Dapp is a De-centralized web application that can be used to perform a lottery game. The app works on the instructions of the code written in the lottery.sol file.</p>
        <a href='https://github.com/mradulnatani/lottery-Dapp'><button style={{backgroundColor:'blue',color:'white',borderRadius:'5px',width:'120px'}} onMouseOver={handlebuttonOver} onMouseLeave={handlebuttonLeave}>Github</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{height:'100%',width:'100%'}}>
      <img src={Nftlogo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">MYnft</h5>
        <p className="card-text">
        This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.</p>
        <a href='https://github.com/mradulnatani/MYnft'><button style={{backgroundColor:'blue',color:'white',borderRadius:'5px',width:'120px'}}onMouseOver={handlebuttonOver} onMouseLeave={handlebuttonLeave}>Github</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card"style={{height:'100%',width:'100%'}}>
      <img src={Portfoliologo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Portfolio Website</h5>
        <p className="card-text">Portfolio website using Node.js and React.js</p>
        <a href='https://github.com/mradulnatani/My-website'><button style={{backgroundColor:'blue',color:'white',borderRadius:'5px',width:'120px'}}onMouseOver={handlebuttonOver} onMouseLeave={handlebuttonLeave}>Github</button></a>
      </div>
    </div>
  </div>
  
  </div>
</div>

  )
}
