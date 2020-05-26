import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class About extends Component {

  componentDidMount(){
    window.scrollTo(0, 0)
    }

  render() {
    return (
      <div className="about" id="about">
        <div className="container">
        <h1>About Us</h1>
        <div className="about_us_line"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="about_content w3-white py-4 px-4">
                <p>Qela Technologies provides ICT and engineering services to small, medium and large organizations for both private and public services.</p>
                <p>Since its inception in 2017, our company has grown and become a well-recognized provider of server infrastructure solution , database system, network infrastructure solution, advanced system and networking security solutions, physical security systems, computer systems, hardware and software sales and providing best support to help our clients achieve their business objectives.</p>
                <p>Our team focus has evolved  and adapted diﬀerent technologies to continuous provide state of art  innovative  services  and  products to our valued clients. We oﬀer a wide variety of services from planning, designing and implementing new ICT solution, optimizing and maintaining client existing ICT solutions making there eﬀective and eﬃcient.</p>
                <div className="gotohomeDiv">
                  <Link to="/about" className="go_to_about w3-btn">More about us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
