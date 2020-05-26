import React, { Component } from 'react'
import {Link, NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg fixed-top navigation">
                <Link className="navbar-brand" to="/"><mark>{this.props.logo}</mark></Link>
                <button className="navbar-toggler cpBtn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                    <NavLink exact={true} activeClassName='is-active' className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='is-active' className="nav-link" to="/about/">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='is-active' className="nav-link" to="/services/">Services</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='is-active' className="nav-link" to="/portfolio/">Portfolio</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='is-active' className="nav-link" to="/contact/">Contact</NavLink >
                </li>

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
