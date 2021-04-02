import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Test.css'




function Test (){
return(
    <>
        <footer className="d-flex flex-row justify-content-around
        bg-dark text-light">
            <div className ="my-auto">
                <h3 className="mb-4 font-weight-bold">Opening Hours</h3>
                <ul className ="days p-0 m-0 text-center">
                    <li><p>Monday 10-02</p></li>
                    <li><p>Tuesday 10-02</p></li>
                    <li><p>Wednsday 10-02</p></li>
                    <li><p>Thursday 10-02</p></li>
                    <li><p>Friday 10-02</p></li>
                    <li><p>Saturday 10-03</p></li>
                    <li><p>Sunday 10-03</p></li>
                </ul>
            </div>
            
            <div className="align-items-center d-flex">
                <p>Logo Here</p>
            </div>
            
            <div className="my-auto">
                <h3 className="mb-4 font-weight-bold">Find us on</h3>
                <div className="d-flex justify-content-around">
                    <a href="facebook.com">F</a>
                    <a href="instagram.com">I</a>
                    <a href="twitter.com">T</a>
                </div>
                
            </div>
           
        </footer>
    </>
);
}

export default Test;