import React, { Component } from 'react'
import VisionMission from '../components/VisionMission';

export class AboutPage extends Component {
  render() {
    return (
       <div>
           <div className="about_us_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>About Qera Tech</h1>
                            <div className="about_us_line"></div>
                            <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={require('../Images/img6.png')} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <VisionMission vision="Vision" mission="Mission"/>
       </div> 
      
    )
  }
}

export default AboutPage
