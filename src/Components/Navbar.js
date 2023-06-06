import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isTokenAvailable, setIsTokenAvailable] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("usertoken");
    setIsTokenAvailable(!!userToken);
  }, [isTokenAvailable]);


  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setIsTokenAvailable(false);
    navigate("/login");
  };

  return (
    <div style={{ marginBottom: "8%" }}>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="favicon.png" alt="Camera" width="26" height="26" />
            CamRate
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Standard Mode
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Portrait Mode
                    </Link>
                  </li>
                  {/* <li><Link className="dropdown-item" to="/login">Low-Light Mode</Link  ></li>
                                    <li><Link className="dropdown-item" to="/login">Selfie Mode</Link  ></li> */}
                </ul>
              </li>
            </ul>
            <div className="container" style={{ marginRight: "8%" }}>
              <li className="btn btn-outline-success">
                <Link className="nav-link" to="/alogin">
                  AdminPannel
                </Link>
              </li>
            </div>
            {/* <form className="d-flex">
                        <Link className="btn btn-outline-primary mx-1" to="/useddevice" role="button">UsedDevice</Link>
                        </form> */}
            {isTokenAvailable ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
