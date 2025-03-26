import React from 'react';
import logo from "../assets/hospital.png"; 
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

export function Navbar() {
    const [cookies,setCookies, removeCookie] = useCookies();

  function logout(){
    removeCookie('admin')
    alert('Admin logged out')

  }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                      <a className="nav-link" href="/list_patients">View Patients</a>
                  </li>
                  {cookies.admin!=undefined && 
                  (<li className="nav-item">
                      <a className="nav-link" href="/add_patients">Add Patient</a>
                  </li>)
                    }
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
              <ul  className="navbar-nav  mb-lg-0">
                    { cookies.admin==undefined &&
                        (<li className="nav-item">
                        <Link className="nav-link" to="adminlogin">Login</Link>
                    </li>)
                    }
                    {
                    cookies.admin !=undefined &&  (<li className="nav-item">
                    <button className="nav-link" onClick={logout}>Logout</button>
                    </li>)
                    }
                
                </ul>
          </div>
      </div>
  </nav>
    );
}
