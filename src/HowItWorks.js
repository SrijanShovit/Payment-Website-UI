import React,{useState} from 'react'
import workapi from './API/Workapi'

const HowItWorks = () => {

    //In React we use States in place of variables which would have been used in JS

    const [workData,setWorkData] = useState(workapi)
    console.log(workData)
    return (
        <>
        <section>
            <div className="work-container container">
                <h1 className="main-heading text-center">How Does It Work?</h1>
                <div className="row">

                    {
                        workData.map((curElem) => {
                            //destructuring 
                            const {id,logo,title,info} = curElem
                            //otherwise we would have to write curElem.id,curElem.logo
                            //and so on


                            //the code inside would keep on repeatedly executing whenever curElem would get new data
                            return(
                                <>

                                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                    {/* using template string `` */}
                                       <i className={`fontawesome-style ${logo}`}></i>
                                       <h2 className="sub-heading">{title}</h2>
                                       <p className="main-hero-para w-100">
                                       {info}
                                       </p>

                                    </div>                
                                </>
                            )
                        })
                    }                 
                </div>
            </div>
        </section>   


        


        </>
    )
}

export default HowItWorks
