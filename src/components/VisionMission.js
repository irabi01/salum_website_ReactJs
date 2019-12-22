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
                                <p>Our vision is to be a leading ICT and engineeringin Africa.</p>
                            </div>
                            <div className="col-md-6">
                                <h1>{this.props.mission}</h1>
                                <p>Our mission is to provide our clients withbest and affordable ICT and engineering solutions.</p>
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
