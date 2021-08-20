import React,{useState} from 'react'
import heroimg3 from './assets/heroimg3.jpg'
import callcenter from './assets/callcenter.jpg'
import howToUseApi from './API/Howtouse'

const Aboutus = () => {

    const [aboutData, setAboutData] = useState(howToUseApi)
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


                            {
                                aboutData.map((curElem) =>{
                                    const {id,title,info} = curElem;
                                    //returning data is important 

                                    return (
                                        <>

                                            <div className="row our-services-info" key={id}>
                                               <div className="col-1 our-services-number">{id}</div>
                                                  <div className="col-10 our-services-data">
                                                    <h2>{title}</h2>
                                                    <p className="main-hero-para">
                                                    {info}
                                                    </p>
                                                </div>
                                            </div>
                                        
                                        </>
                                    )

                                })
                            }


                           

                            <br/>
                            <button className="btn-style btn-style-border">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            
            
            </section>

            
        {/* second part of about us section */}

        <section className="common-section our-services our-services-rightside"> 
                <div className="container mb-5">
                    <div className="row">
                                                

                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-title">
                                --SUPPORT IN ANY LANGUAGE
                            </h3>

                            <h1 className="main-heading">World class support is <br/>available 24X7</h1>


                            {
                                aboutData.map((curElem) =>{
                                    const {id,title,info} = curElem;
                                    //returning data is important 

                                    return (
                                        <>

                                            <div className="row our-services-info" key={id}>
                                               <div className="col-1 our-services-number">{id}</div>
                                                  <div className="col-10 our-services-data">
                                                    <h2>{title}</h2>
                                                    <p className="main-hero-para">
                                                    {info}
                                                    </p>
                                                </div>
                                            </div>
                                        
                                        </>
                                    )

                                })
                            }


                           

                            <br/>
                            <button className="btn-style btn-style-border">
                                Learn More
                            </button>
                        </div>

                        {/* 1 section right side data */}


                        <div className="col-12 col-lg-5 our-service-rightside-img">
                            {/* removed text center for shifting to left */}
                            <img src={callcenter} alt="heroimg" className="img-fluid"/>

                        </div>






                    </div>
                </div>
            
            
            </section>



        </>
    )
}

export default Aboutus
