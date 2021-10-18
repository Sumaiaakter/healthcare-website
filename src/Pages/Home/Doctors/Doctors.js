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
        <div id="doctors" className="container">
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