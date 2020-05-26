import React, { Component } from 'react'

class ContactPage extends Component {

  componentDidMount(){
    window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="contact_container">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1>Our contact</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact_section_one">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <div className="content">
                          <h1>QELA TECHNOLOGIES (T) LIMITED</h1>
                          <address>
                            <p>Street: Magomeni - Njia panda Kagera</p>
                            <p>P.O.Box: 61706, Dar es salaam Tanzania</p>
                            <p>
                              Cell
                              <ul>
                                <li>+255 652 578 406</li>
                                <li>+255 767 272 566</li>
                                <li>+255 718 352 944</li>
                              </ul>
                            </p>
                            <p>Email: info@qelatechnologies.com</p>
                            <p>Website: www.qelatechnologies.com</p>
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="google_map">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="content">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7329791026714!2d39.24408501530172!3d-6.802303595083467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0f57c1d445%3A0xa05a8c1da7c4d0d8!2sKibaruani!5e0!3m2!1sen!2stz!4v1590475131654!5m2!1sen!2stz" width="600" height="450" frameborder="0" style={{border:0, width:'100%', height:700}} allowfullscreen="" aria-hidden="false" tabindex="0" title="google_map"></iframe>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        )
    }
}

export default ContactPage
