import React from "react";


export const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-dark-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TravelMania</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll align-items-start">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
}