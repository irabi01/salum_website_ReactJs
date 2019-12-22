import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="address">
                <h1>Contact us</h1>
                <p>Email: info@qelatechnologies.com</p>
                <p>Call: +255 758 200200</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="address">
                <h1>Office</h1>
                <p>Kagera, Dar es salaam Tanzania</p>
                <p>View us on google</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="address">
                <h1>Join us</h1>
                <p>Talented developer</p>
                <p>jobs@qelatechnologies.com</p>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="copyright">
                <p>Copyright <i className="fa fa-copyright"></i> 2019. All rights reserved. Qela Technologies Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
