import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        {/* <div className="container"> */}
          <div className="row">
            <div className="col-md-6">
              <div className="heading_part">
                <h1>{this.props.our_skills}</h1>
                <div className="skills_line"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skills_part">
                  <h1>Skills list</h1>
                  <h2>Biometric Device Installation</h2>
                  <div className="progress">
                  <div className="progress-bar progress-bar-striped biometric progress-bar-animated" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>100%</div>
                  </div>
                  <h2>Networking Design & Configurtion</h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success network progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>100%</div>
                  </div>
                  <h2>Security surveillance</h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info security progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>100%</div>
                  </div>
                  <h2>Web Design</h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-warning design progress-bar-animated" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width:'98%'}}>98%</div>
                  </div>
                  <h2>Web development</h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-danger development progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>100%</div>
                  </div>
                  <h2>Mobile App development</h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info mobile progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>100%</div>
                  </div>


                  



              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}

export default Skills
