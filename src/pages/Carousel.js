import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Carousel.css';
import {Carousel} from 'react-bootstrap';

import pic1 from '../images/coffee.jpg';
import pic2 from '../images/upupacocktail .jpg';
import pic3 from '../images/upupapancake.jpg';


function CarouselUpupa () {
    return (
        <>
        <div className="bg-warning">
        <Carousel fade>

            <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={pic2}
                  alt="First slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-50 mx-auto"
                src={pic3}
                alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>

            </Carousel.Item>


            <Carousel.Item>
                <img
                className="d-block w-50 mx-auto"
                src={pic1}
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>

            </Carousel.Item>

</Carousel>
</div>
        </>
    );
}



export default CarouselUpupa;