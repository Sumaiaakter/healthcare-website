import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import image from '../../../images/image.jpg'
import image2 from '../../../images/image2.jpg'
import image3 from '../../../images/image3.jpg'

const Banner = () => {
    return (
        <div className="banner mb-5">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h1><span className="text-white">Team Work</span> <br /> <span className="team">Coming Together is The Beginning <br /> Keeping Together is Progress <br /> Working Together is Success</span></h1>
                </div>
                <div className="col-md-6 mt-5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100  "
                                src={image} alt="First-Slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image2} alt="Second-slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src="https://image.freepik.com/free-psd/medical-aid-banner-page-template_23-2148969688.jpg" alt="Third-slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;