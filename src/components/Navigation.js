import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg fixed-top navigation">
                <Link className="navbar-brand" to="/"><mark>{this.props.logo}</mark></Link>
                <button className="navbar-toggler" id="cpBtn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1 col-sm-12">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li> */}

                </ul>
            </div>

                </div>
              </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigation
