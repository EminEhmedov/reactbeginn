import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div><nav className="navbar py-0 fixed-top navbar-expand-lg navfoot">
    <div className="container-fluid">
      <a className="navbar-brand " href="#">
      <i className="fa-brands fa-react"></i>
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-primary fs-4 ms-3" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary  fs-4 ms-3" aria-current="page" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary  fs-4 ms-3" aria-current="page" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary  fs-4 ms-3" aria-current="page" to="/product">Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary  fs-4 ms-3" aria-current="page" to="/search">Search</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary  fs-4 ms-3" aria-current="page" to="/sign">Sign</NavLink>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control px-4 me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn  btn-lg btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar