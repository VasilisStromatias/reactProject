import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Footer.css';
import {GrFacebook, GrInstagram, GrTwitter, GrMail} from 'react-icons/gr';
import {ImPhone} from 'react-icons/im';


function Footer (){
    return(
        <>
            <footer className="footer d-flex flex-row justify-content-around
            bg-dark text-light">

                <div className ="my-auto">
                    <h3 className=" font-weight-bold">Opening Hours</h3>
                    <ul className ="days p-0 m-0">
                        <li><p>Δευτέρα 10:00-02:00</p></li>
                        <li><p>Τρίτη 10:00-02:00</p></li>
                        <li><p>Τετάρτη 10:00-02:00</p></li>
                        <li><p>Πέμπτη 10:00-02:00</p></li>
                        <li><p>Παρασκευή 10:00-02:00</p></li>
                        <li><p>Σάββατο 10:00-03:00</p></li>
                        <li><p>Κυριακή 10:00-03:00</p></li>
                    </ul>
                </div>
                
                <div className="align-items-center d-flex flex-column my-auto">

                    <h3 className=" font-weight-bold">Contact</h3>

                    <div className="text-warning"><ImPhone/></div>
                    <p className="text-light">210-xxxxxxx</p>

                    <div className="text-warning"><GrMail/></div>
                    <p className="text-light">info@upupaepops.com</p>

                    <button className="btn btn-warning w-100">
                        <Link to="/contact" className="text-dark">Send us mail</Link>
                    </button>

                </div>
                
                <div className="my-auto">
                    <h3 className="find-us m-0 font-weight-bold">Find us on</h3>
                    <div className="social-media d-flex justify-content-center ">
                        <a className="text-light mr-4" href="facebook.com"><GrFacebook/></a>
                        <a className="text-light mr-4" href="instagram.com"><GrInstagram/></a>
                        <a className="text-light mr-4" href="twitter.com"><GrTwitter/></a>
                    </div>
                    
                </div>
               
            </footer>

            <div className="bg-dark">
            <p className="copyrights mb-0 text-light text-center">All rights reserved 2021 / Design by Vasilis Stromatias</p>
            </div>

        </>

    );
}

export default Footer;