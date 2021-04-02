import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ContactUs.css'


function ContactUsPage(){
return (
<>
<div className="test ">

<div className="container contact-page">
    <div className="contact-page d-flex flex-column justify-content-center align-items-center">
    <div className="card w-75 mx-auto bg-dark ">
    <form className="bg-dark">

        <div className ="card-body h-75 d-flex flex-column justify-content-center align-items-center my-5 p-0">

            <h2 className="card-title text-light display-4 text-center">Send us an email</h2>

            <label className="text-warning">Name</label>
            <input type="text" class="form-control w-75" placeholder="Enter name here"/> 

            <label className="text-warning">E-mail</label>
            <input type="email" class="form-control w-75" placeholder="Enter email here"/>

            <label className="text-warning">Your message</label>
            <textarea class="form-control w-75" rows="5" placeholder="Your text here..."/>

        </div> {/* card body */}
            
           <button type="submit" class="btn btn-warning w-50 mx-auto
           d-flex flex-row justify-content-center">Send</button>
        
    </form>
    </div> {/*card*/}
    </div>
</div>
</div>
</>
);
}


export default ContactUsPage;