import React, { Component } from 'react'

export class ParallaxTop extends Component {
  render() {
    return (
      <div className="parallax_one">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text">
                <h1>{this.props.make_text}</h1>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ParallaxTop
