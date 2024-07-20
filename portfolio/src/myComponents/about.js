import React from 'react'
import Img2 from '../myComponents/Myimge2.jpg'
export default function about() {
  return (
    <div>
        <h1><b><u>About Me</u></b></h1>
        <br/>
        <div className="card mb-3" style={{maxWidth:'540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Img2} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><b>Experience</b></h5>
        <p className="card-text">1+ Year of experience in Frontend development</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><b>Eductaion</b></h5>
        <p className="card-text">Batchlor of Computer Applications + Masters of Computer Applications</p>
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}
