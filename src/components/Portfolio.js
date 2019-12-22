import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="container">
        <h1>Some of our works</h1>
        <div className="sportfolio_line"></div>
        <br/>
          <div className="row">
            <div className="col-md-4">
             <div className="container_image w3-card">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
            <div className="col-md-4">
             <div className="container_image w3-card">
             <img src={require('../Images/bg5.jpg')} className="img-fluid" alt=""/>
             </div>
            </div>
            <div className="col-md-4">
             <div className="container_image w3-card">
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
