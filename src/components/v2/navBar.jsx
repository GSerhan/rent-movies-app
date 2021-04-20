import React, { Component } from "react";
import { Link } from "react-router-dom";

class navBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/v1' className="navbar-brand">App By me</Link>
                <Link to='/v2' className="navbar-brand">App Enhanced</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/v2/movies" className="nav-link">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/v2/customers" className="nav-link">Customers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/v2/rentals" className="nav-link">Rentals</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default navBar;
