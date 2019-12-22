import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="container">
        <h1>About Us</h1>
        <div className="about_us_line"></div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="about_content">
                <p>Qela Technologies provides ICT and engineering services to small, medium and large organizations for both private and public services.</p>
                <p>Since its inception in 2017, our company has grown and become a well-recognized provider of server infrastructure solution , database system, network infrastructure solution, advanced system and networking security solutions, physical security systems, computer systems, hardware and software sales and providing best support to help our clients achieve their business objectives.</p>
                <Link to="/about" className="go_to_about">More about us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
