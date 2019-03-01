import React, { Component } from 'react'

export class ParallaxBottom extends Component {
  render() {
    return (
      <div className="parallax_three">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1>{this.props.lets_build}</h1>
              <div className="parallax_three_line"></div>
              <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ParallaxBottom
