import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/HomePage.css';
import {GrFacebook, GrInstagram, GrTwitter} from 'react-icons/gr';
import {FaTripadvisor} from 'react-icons/fa';
import CarouselUpupa from './Carousel';



function HomePage(){
    return (
    <>
<div className="one">

    <div className ="container one-container
    d-block d-sm-flex align-items-sm-center justify-content-sm-end
    ">

        <div className="text-light text-center welcomeTo">
            <h3 className="text-left">Welcome to</h3>
            <h1 className="display-3 company-name">Upupa Epops</h1>
            <h6 className="text-right">the bar</h6>
        </div>

    </div>

    <div className="ml-10 d-flex align-items-center justify-content-start 
    ">

        <h1 className="find-us-text text-light display-4
        ">Follow us on</h1>
        
            <div className="ml-5 find-us-social d-flex justify-content-between
            ">
                <a className="mr-4 text-light" href="https://www.facebook.com/upupaepopsthebar2016"><GrFacebook/></a>
                <a className="mr-4 text-light" href="https://www.instagram.com/upupaepops_thebar/"><GrInstagram/></a>
                <a className="mr-4 text-light" href="https://www.tripadvisor.com.gr/Attraction_Review-g189400-d11667858-Reviews-Upupa_Epops_The_Bar-Athens_Attica.html"><FaTripadvisor/></a>
            </div>
        
    </div>
    
</div>



<div className="one-half bg-warning 
d-flex justify-content-center align-items-center
">
        <button className="btn btn-dark contact-btn w-50 h-50">
            <a href="/contact">
                <h1 className="display-4 text-light">Contact Us</h1>
            </a>
        </button>
</div> 



<div className="bg-leaf">
<div className="container">
    <div className="two d-flex justify-content-around align-items-center
    ">

        <div className="shape bg-warning 
        d-flex flex-column justify-content-center align-items-center
        ">
            <h3 className="mr-5">Speciality Coffee</h3>
            <h6 className="pl-5 m-0">from</h6>
            <h1 className="mb-3 ml-3">Hausbrand</h1>
        </div>

        <div className="w-35 text-light d-none d-md-block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In at felis felis. Praesent sagittis efficitur nulla sed
                efficitur. Praesent sit amet commodo urna, vitae imperdiet
                nisi. Phasellus mi neque, placerat dictum sollicitudin ac,
                ultricies in magna. Phasellus libero mauris, facilisis
                dignissim tellus sed, pretium mollis sem. Aenean iaculis
                tincidunt lorem non cursus. Quisque fermentum ante a
                consequat dapibus. Etiam tincidunt lectus eu ligula
                hendrerit, nec porta odio laoreet. Cras a congue
                 libero. Pellentesque at felis eros.
            </p>
        </div>

    </div>


    <div className="two d-flex justify-content-around align-items-center
    ">
        

        <div className="w-25 shape-signature
         d-flex flex-column">
             <h3 className="text-light d-md-none font-weight-bold">Signature Cocktails</h3>
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In at felis felis. Praesent sagittis efficitur nulla sed
                efficitur. Praesent sit amet commodo urna, vitae imperdiet
                nisi. Phasellus mi neque, placerat dictum sollicitudin ac,
                ultricies in magna.             
            </p>

            <button className="btn btn-warning">
                <a href="/signature-cocktail" className="text-dark">
                    <h5 className="mt-2">See the cocktails</h5>
                </a>
            </button>

        </div>

        <div className="shape bg-warning
        d-none
        d-md-flex flex-column justify-content-center align-items-center
        ">
            <h3 className="mr-5">Signature Cocktails</h3>
            <h6 className="pl-5 m-0">from</h6>
            <h1 className="mb-3 ml-3">our TEAM</h1>
        </div>

    </div>

    

</div>
</div>

<div className="carousel-container bg-warning py-5 d-none d-md-block">
    <CarouselUpupa />
</div>

    </>
    );
}

export default HomePage;