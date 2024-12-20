import React from 'react'
import "./Navbar.css"
import { Routes, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';  
const Navbar = () => {

  
  return (
    <div className='navbar'>
      <div className="container">
      <div className="nav">
      <h2>ZAUR</h2>
        <div className="nav-area">
          <ul>
           <Link to="/home"> <li>Home</li> </Link>
           <Link to="/about"> <li>About</li> </Link>
           <Link to="/contact"> <li>Contact</li> </Link>
           <Link to="/blog"> <li>Blog</li> </Link>

           <Link to="/login">   <li>Logout</li> </Link>
           <Link to="/register">   <li>Register</li> </Link>
           <Link to="/login"> <li>Login</li> </Link>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar