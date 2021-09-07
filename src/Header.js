import React from 'react'
import heroimg from './assets/heroimg.jpg'
import heroimg2 from './assets/heroimg2.jpg'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-center order-lg-first order-last">
                            {/* flex column for arranging vertically */}
                            {/* align-items-center for centering
                            but due to no extra height centering effect does not appear */}
                            <h1 className="display-2">
                                Online Payment Made<br/> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas quisquam earum tempore necessitatibus id neque et incidunt, rem ratione nobis, voluptate natus nulla laudantium assumenda iure asperiores rerum veniam?
                            </p>
                            <h3>
                                Get early access for you
                            </h3>
                            <div className="input-group mt-3 mb-3">
                                <input type="text" className="rounded-pill w-75 mb-3 me-3 p-2 form-control-text" placeholder="Enter your email"/>
                                <div className="input-group-button">Get it now</div>

                            </div>
                        </div>

                        
                            {/* ---------main header--------- */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                            <img src={heroimg} alt="heroimg" className="img-fluid"/>
                            <img src={heroimg2} alt="heroimg" className="img-fluid main-hero-img2"/>


                        </div>


                    </div>

                </section>
            </header>
        </>
    )
}

export default Header
