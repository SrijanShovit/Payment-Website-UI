import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const [show,setShow] = useState(false)
    return (
        <>
        <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          {/* removed bg-light to remove white colour */}
  <div className="container">
      {/* use container instead of container-fluid for gap on both ends */}
    <a className="navbar-brand" href="#">SrijanPay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={ `collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {/* me is margin end */}
          {/* ms is margin start->things will go to right */}
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline btn-style" type="submit">Sign Up</button>
        <button className="btn btn-outline btn-style btn-style-border" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>
</section>
            
        </>
    )
}

export default Navbar
