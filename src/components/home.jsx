import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class home extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="d-flex justify-content-center route-container">
                        <Link className="btn btn-primary button my-auto" to="/roles">
                            <h1>3</h1>
                        </Link>
                        <Link className="btn btn-primary button my-auto" to="/events">
                            <h1>5</h1>
                        </Link>
                        <Link className="btn btn-primary button my-auto" to ="/artifacts">
                            <h1>3</h1>
                        </Link>
                        <Link className="btn btn-primary button my-auto" to="/values">
                            <h1>5</h1>
                        </Link>
                    </div>

            </React.Fragment >

        )
    }
}

export default home