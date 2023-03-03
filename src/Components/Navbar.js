import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="favicon.png" alt="Camera" width="26" height="26" />CamRate</Link  >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link  >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link  >
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link  >
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Standard Mode</Link  ></li>
                                    <li><Link className="dropdown-item" to="/">Portrait Mode</Link  ></li>
                                    <li><Link className="dropdown-item" to="/">Low-Light Mode</Link  ></li>
                                    <li><Link className="dropdown-item" to="/">Selfie Mode</Link  ></li>

                                </ul>
                            </li>
                        </ul>
                        <div style={{marginRight:"8%"}}>
                        <li className="btn btn-outline-success">
                       
                            <Link className="nav-link" to="/about">AdminPannel</Link  >
                        </li>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
