import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ">
                    <a className="navbar-brand"  href="#"><img src="favicon.png" alt="Camera" width="26" height="26" />CamRate</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active"  aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Standard Mode</a></li>
                                    <li><a className="dropdown-item" href="#">Portrait Mode</a></li>
                                    <li><a className="dropdown-item" href="#">Low-Light Mode</a></li>
                                    <li><a className="dropdown-item" href="#">Selfie Mode</a></li>
  
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success"  type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
