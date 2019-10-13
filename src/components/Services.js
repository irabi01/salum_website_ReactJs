import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
      <div className="service">
        <div className="container">
        <h1>Our Service</h1>
        <div className="service_line"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="service_container w3-white mt-2">
                <ul className="w3-ul w3-card" style={{width:'100%'}}>
                  <li>Biometric Device Installation</li>
                  <li>Networking design</li>
                  <li>Security surveillance</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service_container w3-white mt-2">
                <ul className="w3-ul w3-card" style={{width:'100%'}}>
                  <li>Web Design</li>
                  <li>Web development</li>
                  <li>Mobile App development</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Services
