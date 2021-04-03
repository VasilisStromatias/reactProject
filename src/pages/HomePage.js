import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/HomePage.css';


function HomePage(){
    return (
    <>
<div className="one">

    <div className ="container d-flex align-items-center justify-content-end">

        <div className="text-light text-center">
            <h3 className="text-left">Welcome to</h3>
            <h1 className="display-4">Upupa Epops</h1>
            <h6 className="text-right">the bar</h6>
        </div>

    </div>
    
</div>

<div className="one-half bg-warning d-flex justify-content-center align-items-center">
        <button className="btn btn-dark w-50 h-50">
            <a href="/contact">
                <h1 className="display-4 text-light">Contact Us</h1>
            </a>
        </button>

    </div>

<div className="test">
<div className="container">
    <div className="d-flex justify-content-around align-items-center two">

        <div className="shape bg-warning d-flex flex-column justify-content-center align-items-center">
            <h3 className="mr-5">Speciality Coffee</h3>
            <h6 className="pl-5 m-0">from</h6>
            <h1 className="mb-3 ml-3">Hausbrand</h1>
        </div>

        <div className="w-25 text-light">
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


    <div className="d-flex justify-content-around align-items-center two">

        <div className="w-25 d-flex flex-column">
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In at felis felis. Praesent sagittis efficitur nulla sed
                efficitur. Praesent sit amet commodo urna, vitae imperdiet
                nisi. Phasellus mi neque, placerat dictum sollicitudin ac,
                ultricies in magna.             
            </p>

            <button className="btn btn-warning">
                <a href="/signature-cocktail" className="text-dark">
                    <h5 className="mt-2">Click here to see the cocktails</h5>
                </a>
            </button>

        </div>

        <div className="shape bg-warning d-flex flex-column justify-content-center align-items-center">
            <h3 className="mr-5">Signature Cocktails</h3>
            <h6 className="pl-5 m-0">from</h6>
            <h1 className="mb-3 ml-3">our TEAM</h1>
        </div>

    </div>

</div>

</div>



    </>
    );
}

export default HomePage;