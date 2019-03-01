import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
      <div className="service">
        <div className="container">
        <h1>Our Service</h1>
        <div className="service_line"></div>
          <div className="row">
            <div className="col-md-4">
              <div service_container>
                <h1>Biometric Device Installation</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div service_container>
                <h1>Networking design</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div service_container>
                <h1>Security surveillance</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
             <div service_container>
              <h1>Web Design</h1>
             </div>
            </div>
            <div className="col-md-4">
             <div service_container>
              <h1>Web development</h1>
             </div>
            </div>
            <div className="col-md-4">
              <div service_container>
               <h1>Mobile App development</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
