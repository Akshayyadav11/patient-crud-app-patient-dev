import React from 'react';
import logo from "../assets/hospital.png"; 

export function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src={logo} alt="Hospital Logo" style={{ height: "40px" }} className="me-2" />
                    </a>

          <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                  
                  <li className="nav-item">
                      <a className="nav-link" href="/patients">View Patients</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/add_patients">Add Patient</a>
                  </li>
                  
              </ul>

              <form className="d-flex">
                  <input 
                      className="form-control me-2" 
                      type="search" 
                      placeholder="Search" 
                      aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
          </div>
      </div>
  </nav>
    );
}
