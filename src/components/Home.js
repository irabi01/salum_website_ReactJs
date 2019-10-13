import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Services from './Services';
import Portfolio from './Portfolio';
// import Contact from './Contact';
import ParallaxTop from './ParallaxTop';
import Skills from './Skills';
import ParallaxBottom from './ParallaxBottom';
import About from './About';

export class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      home_text:"Build application cheaper",
    }
  }
  render() {
    return (
        <div className="full_container">
        <div className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="welcome_text">
                            <h1>{this.state.home_text}</h1>
                              <Link to="/about_us" className="btn btn-sm btn_about_us mr-2">about us</Link>
                              <Link to="/contact_us" className="btn btn-sm btn_contact_us">contact us</Link>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="image_container">
                          <img src={require('../Images/img2.png')} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <About/>
          <Skills our_skills="Our Skills"/>
          <ParallaxTop make_text="Make your software more better"/>
          <Services/>
          <Portfolio />
          <ParallaxBottom lets_build="Let's start your project now"/>
          {/* <Contact/> */}
          </div>
    )
  }
}

export default Home
