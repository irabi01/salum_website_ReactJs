import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Welcome extends Component {
  render() {
    return (
      <div className="welcome_container">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="welcome_image">
                        <img src={require('../Images/img4.png')} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-md-8">
                    <h1> {this.props.welcome_text} </h1>
                    <br/><br/>
                     <Link to="#" className="about_us_link">Explore more</Link>  
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Welcome
