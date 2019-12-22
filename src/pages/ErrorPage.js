import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ErrorPage extends Component {
    render() {
        return (
            <div>
                <div className="error_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1>404</h1>
                                    <p>Page you are looking for is not found.</p>
                                    <Link to='/' className="back_home">back home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage
