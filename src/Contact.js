import React,{useState} from 'react'
import contactimg from './assets/heroimg.jpg'

const Contact = () => {
    const [userData,setUserData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        message: '',
       
    })

    let name,value;
    const postUserData = (e) => {
          name = e.target.name;
          value = e.target.value;
          setUserData({...userData,[name]:value})
    }

    const submitData = async  (e) => {
        e.preventDefault();
        const {firstName,lastName,phone,email,address,message} = userData; 

        if(firstName && lastName && phone && email && address && message){
        const res = await fetch("https://auth-production-fbd49-default-rtdb.firebaseio.com/userDataRecords.json",
        {
        method : "POST",
        Headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({firstName,lastName,phone,email,address,message})
    }
        
        );

        if (res){
            setUserData({
                firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        message: '',
            })
            alert("Data submitted")
        }else{
            alert("Please fill the data")
        }
    }
    else{
        alert("Please fill the data")
    }
    }


    return (
        <>
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="-input-field col-12 col-lg-5">
                                <h1 className="main-heading fw-bold">Connect With Our<br/> Sales Team</h1>
                                <p className="main-hero-para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum veniam possimus!
                                </p>
                                <figure>
                                    <img src={contactimg} alt="contactUsImg" className="img-fluid" />
                                </figure>
                            </div>


                            {/* right side contact form */}
                            <div className="contact-rightside col-12 col-lg-7">

                            <form method="POST">
                                
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input type="text" name="firstName" id=""
                                            placeholder="First Name"
                                            className="form-control"
                                            value = {userData.firstName}
                                            onChange={postUserData}
                                            />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input type="text" name="lastName" id=""
                                            placeholder="Last Name"
                                            className="form-control"
                                            value = {userData.lastName}
                                            onChange={postUserData}
                                            />
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input type="text" name="phone" id=""
                                            placeholder="Phone Number"
                                            className="form-control"
                                            value = {userData.phone}
                                            onChange={postUserData}
                                            />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input type="text" name="email" id=""
                                            placeholder="Email ID"
                                            className="form-control"
                                            value = {userData.email}
                                            onChange={postUserData}
                                            />
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12 contact-input-field">
                                            <input type="text" name="address" id=""
                                            placeholder="Add Address"
                                            className="form-control"
                                            value = {userData.address}
                                            onChange={postUserData}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <input type="text" name="message" id=""
                                            placeholder="Enter Your Message"
                                            className="form-control"
                                            value = {userData.message}
                                            onChange={postUserData}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-check form-checkbox-style">
                                        <input type="checkbox"
                                        className="form-check-input"
                                        value=""
                                        id="flexCheckChecked"
                                        />

                                        <label                                         className="form-check-label main-hero-para"
                                        >
                                            I agree that the Srijan Pay may contact me at the contact or email address above
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-style w-100"
                                    onClick={submitData}
                                    >Submit</button>
                               
                            </form>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
             
        </section>  
        </>
    )
}

export default Contact
