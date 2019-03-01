import React, { Component } from 'react'

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
                <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
