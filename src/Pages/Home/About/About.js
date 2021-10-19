import React from 'react';
import { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const About = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services container">
            <Banner></Banner><br />
            <div>  </div>
            <br />
            <h1 className="my-5"><span className="text-white bg-primary p-2 ">ABOUT US</span></h1>
            <hr />
            <div className="text-white bg-primary">-------------------WIKIPEDIA------------------</div>
            <h1>Testimonials</h1>
            <hr />
            <h2 className="text-primary m-5">Everything you need to support you in <br />
                your efforts as a family caregiver</h2>
            <hr />
            <h1 className="my-5"><span className="text-white bg-primary p-2 ">Explore Our Top Services</span></h1>
            <div className="service-container mb-3">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;