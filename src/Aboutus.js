import React from 'react'
import heroimg3 from './assets/heroimg3.jpg'

const Aboutus = () => {
    return (
        <>
            <section className="common-section our-services"> 
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src={heroimg3} alt="heroimg" className="img-fluid"/>

                        </div>

                        {/* 1 section right side data */}

                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                --AVAILABLE @ IOS AND GOOGLE APP STORE ONLY
                            </h3>

                            <h1 className="main-heading">How to use the App?</h1>
                            <div className="row our-services-info">
                                <div className="col-1 our-services-number">1</div>
                                <div className="col-10 our-services-data">
                                    <h2>Sign In</h2>
                                    <p className="main-hero-para">
                                        Lorem ipsum, dolor sit amet consectetur 
                                    </p>
                                </div>
                            </div>

                            <br/>
                            <button className="btn-style btn-style-border">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            
            
            </section>
        </>
    )
}

export default Aboutus
