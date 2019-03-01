import React, { Component } from 'react'

export class VisionMission extends Component {
  render() {
    return (
      <div className="vison_mission_container">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>{this.props.vision}</h1>
                                <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500</p>
                            </div>
                            <div className="col-md-6">
                                <h1>{this.props.mission}</h1>
                                <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default VisionMission
