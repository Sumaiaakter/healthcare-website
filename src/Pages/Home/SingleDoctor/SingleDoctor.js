import React from 'react';

const SingleDoctor = ({ doctor }) => {
    const { name, img } = doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12 mx-5">
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default SingleDoctor;