import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Typed from 'react-typed';
import Services from './Services';
import Portfolio from './Portfolio';
import ParallaxTop from './ParallaxTop';
import Skills from './Skills';
import ParallaxBottom from './ParallaxBottom';
import About from './About';

export class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      home_text:"Qela tech limited-- we base on quality and efficiency",
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0)
}
  render() {
    return (
        <div className="full_container">
        <div className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="welcome_text">
                          <h1>{this.state.home_text}</h1>
                            <h2>
                            <Typed
                                loop
                                backSpeed={20}
                                strings={
                                  [
                                  "Our Values",
                                  "1) Integrity",
                                  "2) Professionalism",
                                  "3) Innovation",
                                  "4) Commitment",
                                  "5) Team work"
                                ]
                              }
                                typeSpeed={200}
                                smartBackspace
                                shuffle={false}
                                backDelay={1}
                                fadeOut={false}
                                fadeOutDelay={100}
                                loopCount={0}
                                showCursor
                                cursorChar="|"
                            />
                            </h2>
                              {/* <Link to="/about" className="btn btn-sm btn_about_us mr-2">about us</Link> */}
                              {/* <Link to="/contact" className="btn btn-sm btn_contact_us">contact us</Link> */}
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <About/>
          <Skills our_skills="Our Skills"/>
          <ParallaxTop make_text="Make your software more better"/>
          <section id="services">
            <Services/>
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <ParallaxBottom lets_build="Let's start your project now"/>
          {/* <Contact/> */}
          </div>
    )
  }
}

export default Home
