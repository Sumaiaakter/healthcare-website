import React, { useEffect, useState } from 'react';
import SingleDoctor from '../SingleDoctor/SingleDoctor';



const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`doctors.json`)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container">
            <h2 className="text-primary m-5">Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <SingleDoctor
                        key={doctor.id}
                        doctor={doctor}
                    ></SingleDoctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;