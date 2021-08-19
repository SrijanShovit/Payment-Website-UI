import React from 'react'

const Navbar = () => {
    return (
        <>
        <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          {/* removed bg-light to remove white colour */}
  <div className="container">
      {/* use container instead of container-fluid for gap on both ends */}
    <a className="navbar-brand" href="#">SrijanPay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {/* me is margin end */}
          {/* ms is margin start->things will go to right */}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
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
