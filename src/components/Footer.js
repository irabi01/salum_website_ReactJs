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
                <p>Call: +255 652 578406</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="address">
                <h1>Office</h1>
                <p>Kagera, Dar es salaam Tanzania</p>
                <p><a href="https://www.google.com/maps/place/Kibaruani/@-6.8023036,39.244085,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4b0f57c1d445:0xa05a8c1da7c4d0d8!8m2!3d-6.8023036!4d39.2462737" target="blank">View us on google</a></p>
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
                <p>Copyright <i className="fa fa-copyright"></i> {(new Date().getFullYear())}. All rights reserved. Qela Technologies Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
