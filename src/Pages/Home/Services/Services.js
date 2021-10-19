import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <Banner></Banner>
            <h1 className="my-5"><span className="text-white bg-primary p-2 ">Explore Our Top Services</span></h1>
            <hr />
            <h2 className="text-primary m-5">Everything you need to support you in <br />
                your efforts as a family caregiver</h2>
            <hr />

            <div className="service-container">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <br />
            <p><span>"The place we call home is the place that feels most comfortable and secure. <br /> A sense of home can become especially important as we age. <br /> Our in-home senior care services help ease the challenges of <br /> aging while encouraging seniors to enjoy <br /> the comforts of home."</span></p>
            <Footer></Footer>
        </div>
    );
};

export default Services;