import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, experience, designation, img, description } = service;
    return (
        <div className="container">
            <div className="single-service">
                <img className="mb-3" width="100%" src={img} alt="" />
                <h2 className="text-warning">{name}</h2>
                <h2>{experience}</h2>
                <h2>{description}</h2>
                <h2>{designation}</h2>
                <Link to={`/details/${id}`}>
                    <button className="btn btn-primary m-3">Details of {name}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;