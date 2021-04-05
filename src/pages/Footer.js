import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Footer.css';
import {GrFacebook, GrInstagram, GrTwitter} from 'react-icons/gr';
import {ImPhone, ImMap} from 'react-icons/im';


function Footer (){
    return(
        <>
            <footer className="footer d-flex flex-column flex-sm-row justify-content-around
            bg-dark text-light">

                <div className ="my-auto d-none d-md-block">
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
                    <p className="text-light">212 1055214</p>

                    <div className="text-warning"><ImMap/></div>
                    <p className="text-light">Αλκμήνης 7, Πετράλωνα</p>

                    <button className="btn btn-warning w-75">
                        <Link to="/contact" className="text-dark">Send us mail</Link>
                    </button>

                </div>
                
                <div className="my-auto mx-auto mx-sm-0 row d-sm-flex flex-sm-column justify-content-sm-center">
                    <h3 className="find-us m-0 font-weight-bold col-6 col-sm-12">Find us on</h3>
                    <div className="social-media d-flex justify-content-center col-6 col-sm-12">
                        <a className="text-light mr-4" href="https://facebook.com"><GrFacebook/></a>
                        <a className="text-light mr-4" href="https://instagram.com"><GrInstagram/></a>
                        <a className="text-light mr-4" href="https://twitter.com"><GrTwitter/></a>
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