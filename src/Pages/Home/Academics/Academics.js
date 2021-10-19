import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import Footer from '../../Shared/Footer/Footer';

const Academics = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`doctors.json`)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div id="doctors">
            <Banner />
            <br /><br />
            <h1 className="my-5"><span className="text-white bg-primary p-2 ">Explore Our Top Students</span></h1>
            <hr />
            <h3 className="text-primary">Coming Together is The Beginning <br />
                Keeping Together is Progress <br />
                Working Together is Success</h3>
            <hr />
            <h2 className="text-primary m-5">Our Students</h2>
            <div className="row container w-100%">
                {
                    doctors.map(doctor => <SingleDoctor
                        key={doctor.id}
                        doctor={doctor}
                    ></SingleDoctor>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Academics;