import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import SingleDoctor from '../SingleDoctor/SingleDoctor';



const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`doctors.json`)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div id="doctors" className="container mt-5">
            <br />
            <h1 className="my-5"><span className="text-white bg-primary p-2 ">Explore Our Top Doctors</span></h1>
            <hr />
            <p className="text-primary">Coming Together is The Beginning <br />
                Keeping Together is Progress <br />
                Working Together is Success</p>
            <hr />
            <h2 className="text-primary m-5">Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <SingleDoctor
                        key={doctor.id}
                        doctor={doctor}
                    ></SingleDoctor>)
                }
            </div>
            {/* <Footer></Footer> */}
        </div>

    );
};

export default Doctors;