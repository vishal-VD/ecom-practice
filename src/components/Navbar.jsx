import React from 'react'
import Products from './Products'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-white shadow-sm ">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="#">
    LA COLLECTION
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/Products'>PRODUCT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contact">CONTACT</NavLink>
        </li>
      </ul>
    
    </div>
      <div classNameName="buttons">
        <NavLink to="/Login" className="btn btn-outline-dark"> 
       <i className="fa fa-sign-in me-1" ></i> Log-In</NavLink>
       <NavLink to="Register" className="btn btn-outline-dark ms-2"> 
       <i className="fa fa-user-plus me-1" ></i> Register</NavLink>
       <NavLink to="Cart" className="btn btn-outline-dark  ms-2"> 
       <i className="fa fa-shopping-cart me-2" >Cart</i> </NavLink>
      </div>
  </div>
</nav>

    </>
  )
}

export default Navbar