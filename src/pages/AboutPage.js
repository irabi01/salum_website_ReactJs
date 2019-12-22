import React, { Component } from 'react'
import VisionMission from '../components/VisionMission';

export class AboutPage extends Component {
    componentDidMount(){
        const blogID = this.props.match.params.blogID;
        window.scrollTo(0, 0)
    }
  render() {
    return (
       <div>
           <div className="about_us_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>About Qela Tech</h1>
                            <div className="about_us_line"></div>
                            {/* <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.</p> */}
                        </div>
                        <div className="col-md-6">
                            <img src={require('../Images/img6.png')} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row w3-card">
                        <div className="col-md-8 offset-md-2">
                            <div className="general_info_1">
                                <h1>General Information</h1>
                                <p>Qela Technologies provides ICT and engineering services to small, medium and large organizations for both private and public services.</p>
                                <p>Since its inception in 2017, our company has grown and become a well-recognized provider of server infrastructure solution , database system, network infrastructure solution, advanced system and networking security solutions, physical security systems, computer systems, hardware and software sales and providing best support to help our clients achieve their business objectives.</p>
                                <p>Our team focus has evolved  and adapted diﬀerent technologies to continuous provide state of art  innovative  services  and  products to our valued clients. We oﬀer a wide variety of services from planning, designing and implementing new ICT solution, optimizing and maintaining client existing ICT solutions making there eﬀective and eﬃcient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="imageSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={require('../Images/img6.png')} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div> */}
            <VisionMission vision="Vision" mission="Mission"/>
       </div> 
      
    )
  }
}

export default AboutPage
