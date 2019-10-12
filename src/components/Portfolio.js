import React, { Component } from 'react'

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="container">
        <h1>Workdone so far</h1>
        <div className="sportfolio_line"></div>
        <br/>
          <div className="row no-gutters">
            <div className="col-md-4">
             <div className="container_image">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
            <div className="col-md-4">
             <div className="container_image">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
            <div className="col-md-4">
             <div className="container_image">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
            <div className="col-md-4">
             <div className="container_image">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
            <div className="col-md-4">
             <div className="container_image">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
            <div className="col-md-4">
             <div className="container_image">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
